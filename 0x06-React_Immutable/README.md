# React Immutable Tasks

This is a collection of tasks that involve working with the Immutable.js library in a React environment. Immutable.js is a JavaScript library that provides immutable data structures, which are useful when building React applications. Immutable data structures allow developers to avoid mutations and make code more predictable and easier to reason about.

## Requirements

- Node.js version 12.x.x or higher
- npm version 6.x.x or higher
- An editor like Visual Studio Code, vim, or emacs

## Installation

To install the necessary dependencies, run the following command in the terminal:

```
npm install
```

This will install Immutable.js and any other dependencies specified in the `package.json` file.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Runs the linter to check for any linting errors.

## Tasks

The following tasks are included in this collection:

1. Create a constant named `map`. It should create an Immutable Map with a specific object and export it. Then, create a second constant named `map2` that modifies the values of `map` and exports it.

2. Create a function named `concatElements` that accepts two arrays as arguments and returns a List containing the values of the two arrays. Then, create a function named `mergeElements` that accepts two objects as arguments and returns a List containing the values of the two objects.

3. Create a function named `mergeDeeplyElements` that accepts two objects as arguments and returns a List containing the values of the two objects. If two values are the same, they should combine each other.

4. Create a function named `areMapsEqual` that accepts two Immutable Maps as arguments and returns true if the Maps are equal.

5. Create a function named `printBestStudents` that accepts an object as an argument and filters any student with a score < 70. It should then print to the console the first name and last name with the first letter capitalized.

## Conclusion

Working with Immutable.js can be a bit different than working with plain JavaScript objects and arrays, but it can provide many benefits when building React applications. By following these tasks and exploring the Immutable.js documentation, you can become more familiar with how to use Immutable.js effectively in your React projects.
