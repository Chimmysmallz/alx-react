# React Redux UI Reducer

This project contains a UI reducer implemented in React Redux. It manages the UI state related to the notification drawer visibility and user login status.

## Requirements

- Node 12.x.x
- npm 6.x.x
- Ubuntu 18.04 LTS
- Editors: vi, vim, emacs, Visual Studio Code

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-redux-ui-reducer.git
```

2. Change into the project directory:

```bash
cd react-redux-ui-reducer
```

3. Install the dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

## File Structure

The project follows the following file structure:

```
react-redux-ui-reducer/
  |- src/
  |  |- actions/
  |  |  |- uiActionTypes.js
  |  |- reducers/
  |  |  |- uiReducer.js
  |  |  |- uiReducer.test.js
  |- package.json
  |- .babelrc
```

## Initial State

The initial state of the UI reducer is defined in the file `reducers/uiReducer.js`. It contains the following properties:

- `isNotificationDrawerVisible` (boolean): Indicates whether the notification drawer is visible or not.
- `isUserLoggedIn` (boolean): Indicates whether the user is logged in or not.
- `user` (object): An empty object representing the user.

## Reducer Function

The file `reducers/uiReducer.js` contains the reducer function named `uiReducer`. It handles various actions and updates the UI state accordingly. The actions are imported from the file `actions/uiActionTypes.js`. The following actions are handled:

- `DISPLAY_NOTIFICATION_DRAWER`: Sets `isNotificationDrawerVisible` to `true`.
- `HIDE_NOTIFICATION_DRAWER`: Sets `isNotificationDrawerVisible` to `false`.
- `LOGIN_SUCCESS`: Sets `isUserLoggedIn` to `true`.
- `LOGIN_FAILURE`: Sets `isUserLoggedIn` to `false`.
- `LOGOUT`: Sets `isUserLoggedIn` to `false`.

## Tests

The test suite for the UI reducer is defined in the file `reducers/uiReducer.test.js`. It verifies the behavior of the reducer for different scenarios:

- The state returned by the `uiReducer` function is equal to the initial state when no action is passed.
- The state returned by the `uiReducer` function is equal to the initial state when the action `SELECT_COURSE` is passed.
- The state returned by the `uiReducer` function changes the `isNotificationDrawerVisible` property correctly when the action `DISPLAY_NOTIFICATION_DRAWER` is passed.

## Notes

- Ensure that you do not mutate the state within the reducer function.
- Use the spread operator to change the state.

Feel free to explore and enhance the project based on your needs.

```
```
