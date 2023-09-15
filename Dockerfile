FROM node:14

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

USER node

RUN npm install -g resume-cli@latest
COPY entrypoint.sh /entrypoint.sh

USER root
ENTRYPOINT ["/entrypoint.sh"]
