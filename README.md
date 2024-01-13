# Quick-Text

## Table of Contents
- [Overview](#overview)
- [Demo](#Demo)
- [How it Works](#howitworks)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Overview

Quick-Text allows user to convert images into text. This can be useful for a 
wide array of purposes such as converting notes paper to digital, text 
extraction from documents, and allows user to search through images. This
project utilizes a react frontend, a Node.js backend, and the EasyOcr library
to process the images. 

## Demo
[![Watch the video](https://i.stack.imgur.com/Vp2cE.png)](https://youtu.be/4J7y4ctY35c)


## How it Works

When a image it uploaded, it is processed and sent to the Node.js backend. Since
Since, EasyOcr is a python library, a child process is spawend and will call on 
the python script to convert the image into text. The result is then returned and
outputed in the frontend. 

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   git clone git@github.com:ShaunveerGill/ocr.git

2. Install dependencies
   Run "yarn install" in both the backend and frontend directory

3. Start Node server
   In the backend directory run "node index.js" to start the node server

4. Start react frontend
   In the frontend directory run "yarn start"

5. Upload an image
   at this point the project is set up and ready to use. Starting by clicking
   anywhere in the upload box to select an image. Once selected give the application
   a few seconds to process the image. Once completed, you will see the text appear in
   the box on the right hand side.

