#!/usr/bin/env bash

URL=$1
NAME=$2

curl ${URL}/opening/section -d "name=${NAME}"
