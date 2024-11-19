import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import App from './App'; // Import your React Native component

// Register the component as the app
AppRegistry.registerComponent('App', () => App);

// Get the app's web output
const { element, getStyleElement } = AppRegistry.getApplication('App');

// Render the app to the DOM
ReactDOM.render(
  <>
    {element}
    {getStyleElement()} {/* Optional: Include inline styles */}
  </>,
  document.getElementById('root') // Ensure this matches your HTML file
);
