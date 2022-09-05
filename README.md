# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Before run your project you need to install yarn in your system globally (installation varies based on the OS your system is using), then you have to run `yarn` or `yarn install` command to install all the dependencies.

After that you need to add and .env file under frontend folder and below env vars

`PORT=8081` - On which port you want to bootstrap your web application (Optional, Default is 3000).
`DISABLE_ESLINT_PLUGIN=true` - This is to avoid the linting error while compiling and run your app in development mode (Optional).
`REACT_APP_API_BASE_URL='http://localhost:3001'` - It is to pointing your backend apis, url depends on your backend configurations (Required).


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.\


### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `yarn lint`

Run the lint for your application and based on the configuration it throws the errors for each file in console.


### `yarn lint:fix`

It tries to fix all possible linting errors, if remaining any the print those in console.


### `yarn test`

Run the unit test cases and gives error/succes report at the end for each test.


### `yarn test:coverage`

Run the unit test cases and at the end it gives the report in tabular format as a report in console for each folder in the application.\
Also the HTML file report is stored under frontend > coverage > lcov-report > index.html file.\
You can run this file in the browser to see the missing lines/functions required to cover, also gives report for each file/folder in percentage.


### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.