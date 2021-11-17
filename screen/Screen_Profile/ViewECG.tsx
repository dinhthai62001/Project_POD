import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ViewECG = () => {
  return (
    <View>
      <View>
        <Image
          style={{marginLeft: 30, width: 370, height: 813}}
          source={require('../../Image/viewECG.png')}
        />
      </View>
    </View>
  );
};
export default ViewECG;
