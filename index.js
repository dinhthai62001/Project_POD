/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
console.disableYellowBox = true;
import {name as appName} from './app.json';
import t from './screen/DemoAnimation'
import Doctor from './presentations/DemoDoctors'

AppRegistry.registerComponent(appName, () => App);
