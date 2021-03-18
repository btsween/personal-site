## Live Site

See this site in its most recent `prod` implementation at https://www.bryansweeney.io

## About

The purpose of this application is to provide an online portfoliio and about page for me. Included in the application are previous projects that I've worked on, and links to some of my current projects.

## Tools

This application was bootstrapped with `create-react-app`, using NPM and React.

This project was built entirely ground up with styles built with custom CSS and `react-styled-components`. The project is entirely dynamic, with responsive views for mobile.

Deployment is taken care of with a Heroku webhook that polls the application for commits to `prod`. Heroku runs the application with Docker, which uses a dynamic port scheme so the Dockerfile does not need to `EXPORT` any port.

## Environment Setup

### Local development build for UI

1. `npm i`
2. `npm run start`

### Local full stack build

1. `npm i`
2. `npm run build`
3. `node server.js`

## Future Work

There are a number of features that are yet to be implemented.

- Test suite
- CI pipeline for deployments
- About me page
