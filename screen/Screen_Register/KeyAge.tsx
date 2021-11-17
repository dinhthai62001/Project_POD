import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import HeadLogo from '../../Components/UI/HeadLogo';
import COLOR from '../../constants/COLOR';
import {Picker} from '@react-native-picker/picker';
import Button from '../../Components/UI/Button';

const App = ({navigation}: {navigation: any}) => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.allcontainer}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../Image/Logo.png')} />
      </View>
      <View style={styles.containerLogoAge}>
        <Image
          style={styles.logoAge}
          source={require('../../Image/logoAge.png')}
        />
      </View>
      <View style={styles.containerAge}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <Text style={{fontSize: 36, fontWeight: 'bold', color: '#091F3A'}}>
            Hi{' '}
          </Text>
          <Text style={{fontSize: 36, fontWeight: 'bold', color: '#6CB6DD'}}>
            Jhont
          </Text>
        </View>
        <View style={{marginTop: 8, marginLeft: 24}}>
          <Text style={{fontSize: 16, fontWeight: '400', color: '#091F3A'}}>
            Before we start, would you like to tell
          </Text>
          <Text style={{fontSize: 16, fontWeight: '400', color: '#091F3A'}}>
            us about your age?
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
                  label="36"
                  value="java"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="31"
                  value="java2"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="32"
                  value="java3"
                />
                <Picker.Item
                  style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                  label="33"
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
            {'  '}year old
          </Text>
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
          Are you male or female
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              width: 200,
              borderBottomWidth: 1,
              borderBottomColor: '#6CB6DD',
              justifyContent: 'center',
            }}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                label="Male"
                value="java"
              />
              <Picker.Item
                style={{color: '#6CB6DD', fontSize: 30, fontWeight: '700'}}
                label="Female"
                value="java2"
              />
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetaiKeyAge')}
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
export default App;
const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  container: {
    backgroundColor: '#FAFBFC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 69,
    height: 36,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
  containerLogoAge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoAge: {
    width: 197,
    height: 138,
    marginTop: 37,
    color: COLOR.blue_5,
  },
  containerAge: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 185,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
  },
  containerSex: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 112,
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
