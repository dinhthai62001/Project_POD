import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  FlatList
} from 'react-native';
import {Doctor} from '../Data/Data_Doctor'
import COLOR from '../constants/COLOR';
const App = ({navigation}: {navigation: any}) => {
  // const createTwoButtonAlert = () =>
  //   Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);

  const renderItem=({item}:{item:any})=>{
    return(
        <View style={styles.containerDoctor}>
          <TouchableOpacity onPress={()=>navigation.navigate('DetaiDoctors')}> 
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
        </TouchableOpacity>
        </View>
    )
}  
  return (
    <View style={styles.allcontainer}>
      <View style={styles.container}>
        <View style={{marginLeft: 24}}>
          <Image style={styles.logo} source={require('../Image/Logo.png')} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddFreind')}>
          <Image
            style={styles.logofriend}
            source={require('../Image/friend.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#f1f3f8',
          width: 385,
          height: 40,
          marginTop: 16,

          marginLeft: 24,
          flexDirection: 'row',
        }}>
        <TextInput
          style={{fontWeight: '400', fontSize: 16}}
          placeholder="Name"
        />
        <Image
          style={{width: 20, height: 20, marginTop: 10, marginLeft: 280}}
          source={require('../Image/logoSeek.png')}
        />
      </View>

      <View style={{flex:1}}>
            <FlatList
             data={Doctor} 
             keyExtractor={item => item.id.toString()} 
             renderItem={renderItem}
             />

        </View>

     
        
    
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  container: {
    backgroundColor: '#FAFBFC',
    height: 96,
    flexDirection: 'row',
    elevation: 10,
  },
  logofriend: {
    marginLeft: 290,
    height: 17,
    width: 20,
    marginTop: 56,
  },
  logo: {
    marginTop: 49,
    width: 69,
    height: 36,
  },
  logoMorning: {
    width: 385,
    height: 100,
    borderRadius: 16,
    marginLeft: 24,
    marginTop: 16,
  },
  containerDoctor: {
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
});
