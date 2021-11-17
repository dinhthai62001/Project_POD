import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import COLOR from '../../constants/COLOR';
import {Picker} from '@react-native-picker/picker';
import Button from '../../Components/UI/Button';
const EmergencyContact = ({navigation}: {navigation: any}) => {
  const [selectedValue, setSelectedValue] = useState('java');
  const [phone, setphone] = useState('');
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
          style={styles.logoPhone}
          source={require('../../Image/logoPhone.png')}
        />
      </View>
      <View style={styles.containerEmergency}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <Text style={{fontWeight: '700', fontSize: 36, color: COLOR.blue_8}}>
            Emergency
          </Text>
          <Text style={{fontWeight: '700', fontSize: 36, color: COLOR.blue_8}}>
            Contact
          </Text>
        </View>
        <View style={{width: 280, height: 72, marginLeft: 24}}>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            What is your contact, in case of emergency? You may use your
            caretake's contact.
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: COLOR.blue_5,
            width: 290,
            height: 50,
            marginLeft: 24,
            marginTop: 16,
          }}>
          <TextInput placeholder="Caretaker's name" />
        </View>
        <View style={{flexDirection: 'row', marginRight: 30}}>
          <View
            style={{
              width: 90,
              height: 40,
              borderWidth: 1,
              borderColor: COLOR.blue_4,
              marginLeft: 24,
              marginTop: 16,
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            <View style={{height: 50, width: 105, justifyContent: 'center'}}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item
                  style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_4}}
                  label="+84"
                  value="java"
                />
                <Picker.Item
                  style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_4}}
                  label="+83"
                  value="java2"
                />
                <Picker.Item
                  style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_4}}
                  label="+84"
                  value="java3"
                />
                <Picker.Item
                  style={{fontSize: 14, fontWeight: '400', color: COLOR.blue_4}}
                  label="+84"
                  value="java3"
                />
              </Picker>
            </View>
          </View>
          <View style={styles.phoneInputContainer}>
            <TextInput
              style={styles.textphone}
              placeholderTextColor={COLOR.blue_4}
              keyboardType="number-pad"
              onChangeText={text => setphone(text)}
              placeholder="Phone Number"
            />
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('OTP', {phone})}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              Get OTP
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </View>
  );
};
export default EmergencyContact;
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
  logoPhone: {
    width: 124,
    height: 163,
    marginTop: 39,
    color: COLOR.blue_5,
  },
  containerEmergency: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 364,
    borderRadius: 16,
    elevation: 15,
    marginTop: 8,
    marginLeft: 24,
  },
  phoneInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.blue_4,
    width: 196,
    height: 40,
    marginTop: 16,
    marginLeft: 10,
  },
  textphone: {
    fontWeight: '700',
    textAlignVertical: 'center',
    color: COLOR.blue_4,
  },
  containerButton: {
    marginLeft: 24,
    marginTop: 24,
  },
});
