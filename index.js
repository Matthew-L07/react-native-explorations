/**
 * @format
 */

import fetch from 'node-fetch';
import {AppRegistry} from 'react-native';
import 'react-native-url-polyfill/auto';
import App from './App';
import {name as appName} from './app.json';

global.fetch = fetch;

AppRegistry.registerComponent(appName, () => App);
