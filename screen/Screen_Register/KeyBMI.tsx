import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import COLOR from '../../constants/COLOR';
import {Picker} from '@react-native-picker/picker';
import Button from '../../Components/UI/Button';

const KeyBMI = ({navigation}: {navigation: any}) => {
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
        <View style={{marginLeft: 115}}>
          <Text style={styles.textBMI}>Calculate BMI</Text>
        </View>
      </View>
      <View style={styles.containerLogoWeight}>
        <Image
          style={styles.logoWeight}
          source={require('../../Image/weight.png')}
        />
      </View>
      <View style={styles.containerWeight}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{marginTop: 16, fontSize: 16, fontWeight: '400'}}>
            What is your weight
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 120,
              borderBottomWidth: 1,
              borderBottomColor: '#6CB6DD',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="56"
                  value="java"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="57"
                  value="java2"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="58"
                  value="java3"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="59"
                  value="java4"
                />
              </Picker>
            </View>
          </View>
          <Text
            style={{
              marginTop: 29,
              fontSize: 16,
              fontWeight: '700',
              color: '#091F3A',
            }}>
            {'  '}kg
          </Text>
        </View>
      </View>

      <View style={styles.containeHeight}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{marginTop: 16, fontSize: 16, fontWeight: '400'}}>
            What is your height
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 135,
              borderBottomWidth: 1,
              borderBottomColor: '#6CB6DD',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="156"
                  value="java"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="157"
                  value="java2"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="158"
                  value="java3"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="159"
                  value="java4"
                />
              </Picker>
            </View>
          </View>
          <Text
            style={{
              marginTop: 29,
              fontSize: 16,
              fontWeight: '700',
              color: '#091F3A',
            }}>
            {'  '}cm
          </Text>
        </View>
      </View>

      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetaiKeyBMI')}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              Calculate
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </View>
  );
};
export default KeyBMI;
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
  textBMI: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    color: COLOR.blue_8,
  },
  containerLogoWeight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWeight: {
    width: 115,
    height: 136,
    marginTop: 39,
    color: COLOR.blue_5,
  },
  containerWeight: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 136,
    borderRadius: 16,
    elevation: 15,
    marginTop: 24,
    marginLeft: 24,
  },
  containeHeight: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 136,
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
