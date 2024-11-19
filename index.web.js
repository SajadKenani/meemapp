import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure your App component is correctly imported
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json'; // React Native app name

// Register the app for the web using react-native-web
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

ReactDOM.render(<App />, document.getElementById('app-root'));
