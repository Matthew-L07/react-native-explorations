/**
 * @format
 */

import fetch from 'node-fetch';
import {AppRegistry} from 'react-native';
import 'react-native-url-polyfill/auto';
import {name as appName} from './app.json';
import App from './src/App';

global.fetch = fetch;

AppRegistry.registerComponent(appName, () => App);
