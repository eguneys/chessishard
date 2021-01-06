#!/usr/bin/env bash

URL=$1
NAME=$2
HANDLE=$3

curl ${URL}/openings/section -d "name=${NAME}&handle=${HANDLE}"
