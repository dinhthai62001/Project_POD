import React, {useState} from 'react';
import COLOR from '../../constants/COLOR';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Button from '../../Components/UI/Button';
const Location = ({navigation}: {navigation: any}) => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.allcontainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.logoBack}
            source={require('../../Image/back.png')}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 130}}>
          <Image style={styles.logo} source={require('../../Image/Logo.png')} />
        </View>
      </View>
      <View style={styles.containerLogoLocation}>
        <Image
          style={styles.logoLocation}
          source={require('../../Image/logoLocation.png')}
        />
      </View>
      <View style={styles.containerLocation}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <Text style={{fontWeight: '700', fontSize: 36, color: COLOR.blue_8}}>
            Location
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              marginTop: 8,
              color: COLOR.blue_8,
            }}>
            what is your location?
          </Text>
        </View>
        <View
          style={{
            height: 24,
            width: 240,
            borderBottomWidth: 1,
            borderBottomColor: '#6CB6DD',
            marginTop: 10,
          }}>
          <Text style={{fontWeight: '700', fontSize: 19, color: COLOR.blue_4}}>
            A District,B City, Tampines
          </Text>
        </View>

        <Text style={{fontWeight: '400', fontSize: 16, marginTop: 20}}>
          You may choose from here
        </Text>

        <View style={styles.containerCountry}>
          <View style={{height: 50, width: 320}}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Select your country"
                value="java"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Việt Nam"
                value="java2"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="England"
                value="java3"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="America"
                value="java3"
              />
            </Picker>
          </View>
        </View>

        <View style={styles.containerCity}>
          <View style={{height: 50, width: 320}}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Your City"
                value="java"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Thành phố Hồ Chí Minh"
                value="1"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Hà Nội"
                value="2"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Đà Nẵng"
                value="3"
              />
            </Picker>
          </View>
        </View>

        <View style={styles.containerCountry}>
          <View style={{height: 50, width: 320}}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Your Distrist"
                value="6"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Quận 1"
                value="7"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Quận 2 "
                value="8"
              />
              <Picker.Item
                style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_8}}
                label="Quận 3 "
                value="8"
              />
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmergencyContact')}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </View>
  );
};
export default Location;
const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  container: {
    backgroundColor: '#FAFBFC',
    marginTop: 53,
    flexDirection: 'row',
  },
  logoBack: {
    width: 12,
    height: 21,
    marginLeft: 30,
  },
  logo: {
    width: 69,
    height: 36,
  },
  containerLogoLocation: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLocation: {
    width: 130,
    height: 113,
    marginTop: 60,
    color: COLOR.blue_5,
  },
  containerLocation: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 330,
    borderRadius: 16,
    elevation: 15,
    marginTop: 8,
    marginLeft: 24,
    alignItems: 'center',
  },
  containerCountry: {
    backgroundColor: '#ffffff',
    width: 330,
    height: 40,
    borderRadius: 16,

    marginTop: 8,
    marginLeft: 5,
    justifyContent: 'center',
    borderColor: COLOR.blue_4,
    borderWidth: 1,
  },
  containerCity: {
    backgroundColor: '#ffffff',
    width: 330,
    height: 40,
    borderRadius: 16,

    marginTop: 8,
    marginLeft: 5,
    justifyContent: 'center',
    borderColor: COLOR.blue_4,
    borderWidth: 1,
  },
  containerButton: {
    marginLeft: 24,
    marginTop: 24,
  },
});
