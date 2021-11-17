import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import COLOR from '../../constants/COLOR';
import {Picker} from '@react-native-picker/picker';
import Button from '../../Components/UI/Button';

const DetaiKeyAge = ({navigation}: {navigation: any}) => {
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
      <View style={styles.containerLogoAge}>
        <Image
          style={styles.logoAge}
          source={require('../../Image/logoAB0.png')}
        />
      </View>

      <View style={styles.containerBlood}>
        <Text
          style={{
            marginTop: 16,
            marginLeft: 24,
            fontSize: 16,
            fontWeight: '400',
          }}>
          For health tracking purpose, let us know your blood type
        </Text>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: 36,
              width: 130,
              borderBottomWidth: 1,
              borderBottomColor: '#6CB6DD',
              justifyContent: 'center',
              marginTop: 8,
            }}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                label="A"
                value="1"
              />
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                label="B"
                value="2"
              />
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                label="AB"
                value="3"
              />
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                label="O"
                value="4"
              />
            </Picker>
          </View>
        </View>
      </View>

      <View style={styles.containerSex}>
        <Text
          style={{
            marginTop: 16,
            marginLeft: 24,
            fontSize: 16,
            fontWeight: '400',
          }}>
          Are you allergic to something
        </Text>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 50,
              width: 350,
              borderBottomWidth: 1,
              borderBottomColor: '#6CB6DD',
              marginLeft: 18,
            }}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 18, fontWeight: '400'}}
                label="Male"
                value="java"
              />
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 18, fontWeight: '400'}}
                label="Female"
                value="java2"
              />
            </Picker>
          </View>
        </View>
      </View>

      <View style={styles.containerIllness}>
        <Text
          style={{
            marginTop: 16,
            marginLeft: 24,
            fontSize: 16,
            fontWeight: '400',
          }}>
          Do you have any other illness
        </Text>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 50,
              width: 350,
              borderBottomWidth: 1,
              borderBottomColor: '#6CB6DD',
              marginLeft: 18,
            }}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 18, fontWeight: '400'}}
                label="No"
                value="java"
              />
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 18, fontWeight: '400'}}
                label="Yes"
                value="java2"
              />
            </Picker>
          </View>
        </View>
      </View>

      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('KeyBMI')}
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
export default DetaiKeyAge;

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
  containerLogoAge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoAge: {
    width: 210,
    height: 136,
    marginTop: 39,
    color: COLOR.blue_5,
  },
  containerBlood: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 136,
    borderRadius: 16,
    elevation: 15,
    marginTop: 24,
    marginLeft: 24,
  },
  containerSex: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 106,
    borderRadius: 16,
    elevation: 15,
    marginTop: 24,
    marginLeft: 24,
  },
  containerIllness: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 106,
    borderRadius: 16,
    elevation: 15,
    marginTop: 24,
    marginLeft: 24,
  },
  containerButton: {
    marginLeft: 24,
    marginTop: 24,
  },
});
