FROM cypress/browsers:node13.6.0-chrome80-ff72
LABEL Maintainer "Nataliia Galushka <hella.nataly@gmail.com>"
WORKDIR /e2e

COPY package.json /e2e
COPY node_modules/ /e2e/node_modules
COPY cypress.json /e2e
COPY cypress/ /e2e/cypress

