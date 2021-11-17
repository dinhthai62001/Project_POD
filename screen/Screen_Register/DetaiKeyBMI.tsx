import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import COLOR from '../../constants/COLOR';
import Button from '../../Components/UI/Button';

const DetaiKeyBMI = ({navigation}: {navigation: any}) => {
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
          <Text style={styles.textCaluBMI}>Calculate BMI</Text>
        </View>
      </View>
      <View style={styles.containerLogoBMI}>
        <Image
          style={styles.logoBMI}
          source={require('../../Image/logoBMI.png')}
        />
      </View>
      <View style={styles.containertextBMI}>
        <Image
          style={styles.textBMI}
          source={require('../../Image/textBMI.png')}
        />
      </View>
      <View style={styles.containerResultBMI}>
        <Text
          style={{
            marginTop: 24,
            fontSize: 16,
            fontWeight: '500',
            color: '#333333',
          }}>
          Your BMI Result
        </Text>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 36,
            fontStyle: 'normal',
            color: '#F8BA56',
          }}>
          18.3
        </Text>
        <Text
          style={{
            fontWeight: '300',
            fontSize: 16,
            color: '#333333',
            fontStyle: 'normal',
            opacity: 80,
          }}>
          BMI Standard
        </Text>
        <Text style={{fontWeight: '700', fontSize: 24, color: COLOR.blue_4}}>
          20
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('Location')}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              Send result
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </View>
  );
};
export default DetaiKeyBMI;
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
  textCaluBMI: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    color: COLOR.blue_8,
  },
  containerLogoBMI: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBMI: {
    width: 102,
    height: 102,
    marginTop: 53,
    color: COLOR.blue_5,
  },
  containertextBMI: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBMI: {
    width: 61,
    height: 27,
    marginTop: 8,
    color: COLOR.blue_5,
  },
  containerResultBMI: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 172,
    borderRadius: 16,
    elevation: 15,
    marginTop: 24,
    marginLeft: 24,
    alignItems: 'center',
  },
  containerButton: {
    marginLeft: 24,
    marginTop: 24,
  },
});
