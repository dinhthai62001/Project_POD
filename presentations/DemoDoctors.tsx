import  React from 'react';
import {View,FlatList, StyleSheet,Image,TouchableOpacity,Text} from 'react-native';

import COLOR from '../constants/COLOR';

import {Doctor} from '../Data/Data_Doctor'

const Demo =()=>{
  const renderItem=({item}:{item:any})=>{
      return(
          <View style={styles.containerDoctor}>
                <View style={styles.Docter}>
                    <Image  style={styles.logoDocters1} source={item.logo}/>
                    <View style={{marginLeft: 8, marginTop: 12}}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  fontStyle: 'normal',
                  color: COLOR.blue_6,
                }}>
                {item.name}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 14}}>
                {item.hospital}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../Image/logodocterss.png')}
                />
                <Text style={{fontSize: 12, fontWeight: '400'}}>
                  {item.optician}
                </Text>
              </View>
              <TouchableOpacity
              //  onPress={createTwoButtonAlert}
              >
                <View style={{flexDirection: 'row', marginTop: 7}}>
                  <Image
                    style={{width: 16, height: 16, tintColor: COLOR.blue_4}}
                    source={require('../Image/logoCallphone.png')}
                  />
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: '#6D96FF'}}>
                   {item.sdt}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  opacity: 50,
                  color: '#707172',
                  marginTop: 7,
                }}>
                {item.lasted}
              </Text>
            </View>
          </View>
          </View>
      )
  }  
    return(
        <View style={{flex:1}}>
            <FlatList
             data={Doctor} 
             keyExtractor={item => item.id.toString()} 
             renderItem={renderItem}
             />

        </View>

    )
}
export default Demo;
const styles=StyleSheet.create({
    containerDoctor:{
        
            backgroundColor: '#ffffff',
            width: 385,
            height: 128,
            borderRadius: 16,
            elevation: 15,
            marginTop: 16,
            marginLeft: 24,
         
    },
    Docter: {
        flexDirection: 'row',
      },
      logoDocters1: {
        width: 70,
        height: 102,
        marginTop: 12,
        marginLeft: 10,
      },
})
