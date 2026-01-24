SHELL := /usr/bin/env bash

TEXFILES := $(wildcard syllabus/*.tex)
SLIDES := $(wildcard slides/*-lecture.*.md)

OUTDIR ?= build

PDFDIR := $(OUTDIR)/pdf
LECTURE_PAGES := $(OUTDIR)/lectures

all: lint spell

sync:
	bash scripts/sync-eosp.sh

spell:
	-cspell-cli "**/*.{md,tex}"

lint:
	markdownlint-cli2 . --fix
	chktex $(TEXFILES)

build: $(PDFDIR) $(LECTURE_PAGES)
	for f in $(TEXFILES); do \
		pdflatex -interaction=nonstopmode -output-directory=syllabus "$$f"; \
		mv syllabus/$$(basename $$f .tex).pdf $(PDFDIR)/; \
	done
	for s in $(SLIDES); do \
		base=$$(basename $$s .md); \
		( \
		cd slides && \
		pnpm slidev export \
		--format pdf \
			--output "../$(PDFDIR)/$$base.pdf" \
			"$$(basename $$s)" \
			); \
		done
	for s in $(SLIDES); do \
		base=$$(basename $$s .md); \
		outname=$${base//./-}; \
		outdir="../$(LECTURE_PAGES)/$$outname"; \
		mkdir -p $$outdir; \
		( \
		cd slides && \
		pnpm slidev build \
		--out $$outdir \
		--base /eosp/lectures/$$outname/ \
		"$$(basename $$s)" \
		); \
	done

$(PDFDIR):
	mkdir -p $(PDFDIR)

$(LECTURE_PAGES):
	mkdir -p $(LECTURE_PAGES)

clean:
	rm -rf build
	rm -f syllabus/*.aux syllabus/*.log syllabus/*.toc syllabus/*.out syllabus/*.pdf
