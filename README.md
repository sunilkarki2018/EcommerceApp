# Front-end Project(Ecommerce Application)
This is an Ecommerce application that allows users to manages products, application users and roles and cart items. The application supports adding, updating, creating and deleting products. It is buit using react typescript, redux toolkit for state management and materail UI for styling.

## Getting Started
To start the project first clone the project from the repository and run the node command to start the application.
1. git clone https://github.com/sunilkarki2018/fs16_6-frontend-project.git
2. cd fs16_6-frontend-project
2. git checkout develop
3. npm start

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![SASS](https://img.shields.io/badge/SASS-v.1-hotpink)

This project requires implementation of TypeScript and SASS.

## Requirement

1. Use the API endpoint [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/) to create an e-commerce website. Read the documentation and learn how to use the different endpoints.
2. Create at lease 4 pages (can be more if you want): Page for all products, product page,
   profile page (only available if user logins), and cart page (cart page could be a page or a modal)
3. Create Redux store for following features:
   - product reducer: get all products, find a single products, filter products by
     categories, sort products by price. Create, update and delete a product (enable update & delete features only for admin of the webapp)
   - user reducer: register and login
   - cart reducer: add product to cart, remove products, update products's quantity in cart
4. When adding routers to your application, programatically set certain routes to be private. For example, route to user profile page should not be accessible if user has not logged in.
5. Implement unit testing for the reducers
6. Deploy the application and rewrite README file.

## Bonus

1. Use context API to switch theme
2. Use pagination when fetching/displaying all the products
3. Implement performance optimization where applicable

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
