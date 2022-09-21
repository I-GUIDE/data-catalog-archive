#!/bin/bash

IMAGE=us-central1-docker.pkg.dev/thredds/iguide/data-catalog
TAG=0.0.8

# build
docker build ../frontend -t ${IMAGE}:${TAG}

# push
docker push ${IMAGE}:${TAG}

# deploy
terraform apply -var="image=${IMAGE}:${TAG}" -auto-approve
