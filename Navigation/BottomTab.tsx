import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from '../constants/Icons';
import COLOR from '../constants/COLOR';
import Home from '../presentations/Home';
import Doctors from '../presentations/Doctors';
import Notification from '../presentations/Notification';
import Profile from '../presentations/Profile';
import * as Animatable from 'react-native-animatable';
import {Platform} from 'react-native';

// const TabArr = [
//   { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home-heart', component: Home, color: COLOR.blue_7,  },
//   { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'file-document', component: Doctors, color: COLOR.blue_7,  },
//   { route: 'Add', label: 'Add New', type: Icons.Feather, icon: 'clock', component: Notification, color: COLOR.red,   },
//   { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'cart', component: Profile, color: COLOR.black,  },
// ];

// const Tab = createBottomTabNavigator();

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}
   
    screenOptions={{
      headerShown:false,
      tabBarStyle:{
        backgroundColor:'#FFFFFF'
      }
    }}>
      <Tab.Screen name="Home" component={Home} options={{ 
    tabBarIcon: ({focused})=>(
     <View style={{alignItems:'center',justifyContent:'center',top:5}}>
       <Image source={require('../Image/logoHome.png')}
       resizeMode='contain'
       
       style={{width:23,height:20,tintColor:focused?'#2190CD':'#091F3A'}}/>
      
     </View>
    )  
    }} />
      <Tab.Screen name="Doctors" component={Doctors}
      options={{ 
        tabBarIcon: ({focused})=>(
         <View style={{alignItems:'center',justifyContent:'center',top:5}}>
           <Image source={require('../Image/logoDoctors.png')}
           resizeMode='contain'
           
           style={{width:24,height:24,tintColor:focused?'#2190CD':'#091F3A'}}/>
          
         </View>
        )  
        }} />
      
    
      <Tab.Screen name="Notification" component={Notification} options={{ 
    tabBarIcon: ({focused})=>(
     <View style={{alignItems:'center',justifyContent:'center',top:5}}>
       <Image source={require('../Image/logoNotification.png')}
       resizeMode='contain'
       
       style={{width:24,height:24,tintColor:focused?'#2190CD':'#091F3A'}}/>
      
     </View>
    )  
    }} />
      <Tab.Screen name="Profile" component={Profile} options={{ 
    tabBarIcon: ({focused})=>(
     <View style={{alignItems:'center',justifyContent:'center',top:5}}>
       <Image source={require('../Image/logoProfile.png')}
       resizeMode='contain'
       
       style={{width:24,height:24,}}/>
      
     </View>
    )  
    }} />
    </Tab.Navigator>
  );
};
export default MyTabs;
