import React from 'react';
import 'react-native-gesture-handler';
import {View, Text,} from 'react-native';
import DetaiKeyAge from './screen/Screen_Register/DetaiKeyAge';
import SplashScreen from './presentations/Splash';
import Login from './presentations/Login';
import Rest from './presentations/rest';
import Register from './presentations/Register';
import KeyAge from './screen/Screen_Register/KeyAge';
import KeyBMI from './screen/Screen_Register/KeyBMI';
import DetaiKeyBMI from './screen/Screen_Register/DetaiKeyBMI';
import Location from './screen/Screen_Register/Location';
import EmergencyContact from './screen/Screen_Register/EmergencyContact';
import OTP from './screen/Screen_Register/OTP';
import Home from './presentations/Home'
import Tab from './Navigation/BottomTab'
import AddFreind from './screen/Screen_ADD_Friend/AddFreind'
import ButtonAddFriend from './screen/Screen_ADD_Friend/ButtonAddFriend'
import AddSuccessfuly from './screen/Screen_ADD_Friend/AddSuccessfuly'
import DetaiDoctors from './screen/DetaiDoctors'
import ViewECG from './screen/Screen_Profile/ViewECG';
import UpdateContact from './screen/Screen_Profile/UpdateContact';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,

} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createStackNavigator();
// const config={
//   animation:'spring',
//   config:{
//     stiffness:1000,
//     damping:50,
//     mass:3,
//     overshootClaming:false,
//     restDisplacementThreshold:0.01,
//     restSpeedThreshold:0.01
//   }
// }
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false,
       gestureEnabled:true,
          
          // cardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS

          // ...TransitionPresets.SlideFromRightIOS
       
       
      
        }}

      
        
        
        >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rest" component={Rest} />
        <Stack.Screen name="Register" component={Register}  />
        <Stack.Screen name="KeyAge" component={KeyAge} options={{...TransitionPresets.SlideFromRightIOS}} />
        <Stack.Screen name="DetaiKeyAge" component={DetaiKeyAge} options={{...TransitionPresets.SlideFromRightIOS}} />
        <Stack.Screen name="KeyBMI" component={KeyBMI}  options={{...TransitionPresets.SlideFromRightIOS}} />
        <Stack.Screen name="DetaiKeyBMI" component={DetaiKeyBMI}  options={{...TransitionPresets.SlideFromRightIOS}} />
        <Stack.Screen name="Location" component={Location}  options={{...TransitionPresets.SlideFromRightIOS}} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContact}   options={{...TransitionPresets.SlideFromRightIOS}}/>
        <Stack.Screen name="OTP" component={OTP}  options={{...TransitionPresets.SlideFromRightIOS}} />
        <Stack.Screen name="Home" component={Home}  options={{...TransitionPresets.SlideFromRightIOS}} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="AddFreind" component={AddFreind} />
        <Stack.Screen name="ButtonAddFriend" component={ButtonAddFriend} options={{...TransitionPresets.SlideFromRightIOS}}/>
        <Stack.Screen name="AddSuccessfuly" component={AddSuccessfuly} options={{...TransitionPresets.SlideFromRightIOS}}/>
        <Stack.Screen name="DetaiDoctors" component={DetaiDoctors} options={{...TransitionPresets.SlideFromRightIOS}}/>
        <Stack.Screen name="ViewECG" component={ViewECG} />
        <Stack.Screen name="UpdateContact" component={UpdateContact}  options={{...TransitionPresets.SlideFromRightIOS}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

