# I-Guide Data Catalog

React web app for browsing and interacting with the I-Guide Data Catalog.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting up development environment

**Requirements**

- [nodejs](https://nodejs.org/en/download/)
    - osx homebrew install: `brew install node`
- yarn
    - install with `npm install --global yarn`

Continue once you've cloned the repository and installed `nodejs` and `yarn`.


```shell
git clone https://github.com/I-GUIDE/data-catalog.git

cd data-catalog/frontend

# install project dependencies
yarn
```

#### Running Locally

without docker:

```shell
yarn start
```

with docker:

Note, running with docker locally is still a little limiting. As for now, the docker deployment
builds frontend application pieces for production and does not support a development mode. This
means that each time a change to the code is made, you will need to rebuild the `frontend` service.

```shell
# build `frontend` service
docker-compose build

# start `frontend` service in the background.
# service reachable at `http://localhost:8080`
docker-compose up -d
# exclude `-d` to start in the foreground. to stop services running in the foreground, press CTRL-C
# (sends interrupt signal).

# to bring all services down
docker-compose down
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
