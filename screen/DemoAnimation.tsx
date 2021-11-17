
import React,{useEffect,useRef} from 'react';
import {View,Text,Animated, Easing} from 'react-native';

const App =()=>{
  const translation = useRef(new Animated.ValueXY({x:0,y:0})).current;
  useEffect(()=>{
    Animated.spring(translation,{
      toValue:100,
      useNativeDriver:true,
    
      
    }).start();
  },[]);
  return(
    <Animated.View
    style={{
      width:100,
      height:100,
      backgroundColor:'orange',
  
      transform:[
        {translateY:translation.x},
        {translateX:translation.y}
      ]
    }}>

    </Animated.View>

  )
}
export default App;