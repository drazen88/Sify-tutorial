#!/usr/bin/env bash
npm install
bower install
gulp clean
gulp config-deployment build
