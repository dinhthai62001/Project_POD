import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import COLOR from '../../constants/COLOR';
import Button from '../../Components/UI/Button';

const OTP = ({
  route: {
    params: {phone},
  },
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  // const {phone, setphone} = route.params;
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
      <View style={styles.containerOTP}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '700',
              fontStyle: 'normal',
              lineHeight: 36,
              color: COLOR.blue_8,
            }}>
            OTP CODE
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 16, marginLeft: 40}}>
          <Text style={{fontWeight: '700', fontSize: 16, color: COLOR.blue_8}}>
            Enter the OTP sent to{' '}
          </Text>
          <Text style={{fontWeight: '700', fontSize: 16, color: COLOR.blue_4}}>
            +84{phone}
          </Text>
        </View>
        <View style={styles.OPTcontainer}>
          <View style={styles.OTPbox}>
            <TextInput
              style={styles.OPTtext}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
          <View style={styles.OTPbox}>
            <TextInput
              style={styles.OPTtext}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
          <View style={styles.OTPbox}>
            <TextInput
              style={styles.OPTtext}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
          <View style={styles.OTPbox}>
            <TextInput
              style={styles.OPTtext}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              fontStyle: 'normal',
              color: COLOR.blue_8,
            }}>
            You can resend OTP affter{' '}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              fontStyle: 'normal',
              color: COLOR.red,
            }}>
            1:30s
          </Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tab')}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              Verify number
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </View>
    //   <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
    //   <Text>+84{phone}</Text>
    // </View>
  );
};
export default OTP;
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
  containerOTP: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 236,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
  },
  OPTcontainer: {
    marginHorizontal: 20,
    marginTop: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  OTPbox: {
    width: 64,
    height: 64,
    borderRadius: 8,
    borderColor: COLOR.blue_3,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  OPTtext: {
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    color: COLOR.blue_4,
  },
  containerButton: {
    marginLeft: 24,
    marginTop: 24,
  },
});
