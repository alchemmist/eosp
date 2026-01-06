all: sync

sync: 
	bash scripts/sync-eosp.sh

spell:
	-cspell-cli "**/*.{md,tex}"
