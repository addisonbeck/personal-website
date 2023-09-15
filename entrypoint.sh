#!/bin/sh -l

THEME=compact
RESUME=./src/lib/data/resume.json
OUTPUT=./src/lib/assets/resume.pdf

THEME_PACKAGE=jsonresume-theme-${THEME}
echo "Installing theme: ${THEME}"

# NOTE: this needs to be installed locally, not globally
npm install ${THEME_PACKAGE}

resume export --resume ${RESUME} --theme ${THEME} --format pdf ${OUTPUT}
