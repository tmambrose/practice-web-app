FROM gitpod/workspace-mongodb

RUN sudo apt-get update \
 && sudo rm -rf /var/lib/apt/lists/*
