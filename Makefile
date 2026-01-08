TEXFILES := $(wildcard syllabus/*.tex)

all: lint

sync:
	bash scripts/sync-eosp.sh

spell:
	-cspell-cli "**/*.{md,tex}"

lint:
	markdownlint-cli2 . --fix
	chktex syllabus/**/*.tex

build:
	for f in $(TEXFILES); do \
		pdflatex -interaction=nonstopmode -output-directory=syllabus "$$f"; \
	done

clean:
	rm -f syllabus/*.aux syllabus/*.log syllabus/*.toc syllabus/*.out syllabus/*.pdf
