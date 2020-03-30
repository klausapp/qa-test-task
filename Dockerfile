FROM cypress/browsers:node12.13.0-chrome80-ff74
LABEL Maintainer "Nataliia Galushka <hella.nataly@gmail.com>"
WORKDIR /e2e
ENTRYPOINT ["yarn", "run", "test"]
RUN npm install -g cypress \\
  && cypress install
COPY node_modules/ /e2e/node_modules
COPY package.json /e2e
COPY cypress.json /e2e
COPY cypress/ /e2e/cypress

