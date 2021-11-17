import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import COLOR from '../constants/COLOR';
import CheckBox from '@react-native-community/checkbox';
const App = ({navigation}: {navigation: any}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.allcontainer}>
      <Image style={styles.imageLogo} source={require('../Image/Logo.png')} />
      <View
        style={{
          position: 'absolute',
          width: 125,
          height: 125,
          left: 74,
          top: 169,
          backgroundColor: '#D65DF4',
          opacity: 0.2,
          borderRadius: 100,
        }}></View>
      <View
        style={{
          position: 'absolute',
          width: 175,
          height: 175,
          left: -49,
          top: 80,
          backgroundColor: '#2E9DED',
          opacity: 0.2,
          borderRadius: 100,
        }}></View>
      <View
        style={{
          position: 'absolute',
          width: 133,
          height: 133,
          left: 320,
          top: 572,
          backgroundColor: '#90B8F3',
          opacity: 0.2,
          borderRadius: 100,
        }}></View>
      <View style={{marginTop: 29, marginLeft: 25}}>
        <Text
          style={{
            fontSize: 36,
            color: '#091F3A',
            fontWeight: 'bold',

            display: 'flex',
            lineHeight: 36,
          }}>
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#091F3A',
            fontWeight: 'normal',
            fontStyle: 'normal',

            display: 'flex',
            lineHeight: 24,
          }}>
          Create an account so you can see
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#091F3A',
            fontWeight: 'normal',
            fontStyle: 'normal',
            display: 'flex',
            lineHeight: 24,
          }}>
          valuable information about your body
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          // value={email}
          placeholder="Name"
          // onChangeText={text => setemail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          // value={pass}
          placeholder="Phone"
          secureTextEntry
          // onChangeText={text => setpass(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          // value={pass}
          placeholder="Mail"
          secureTextEntry
          // onChangeText={text => setpass(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          // value={pass}
          placeholder="Password"
          secureTextEntry
          // onChangeText={text => setpass(text)}
        ></TextInput>
        <Text
          style={{
            alignItems: 'flex-end',
            alignContent: 'center',
            fontWeight: 'normal',
            fontSize: 14,
            marginLeft: 265,
            marginTop: 12,
          }}>
          Forgot Password?{' '}
        </Text>
        <View style={{flexDirection: 'row', padding: 10}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{fontSize: 16, marginTop: 4}}>
            I agree to{' '}
            {<Text style={{color: '#6CB6DD'}}> Terms & Conditions</Text>}
          </Text>
        </View>
        <View style={styles.Viewbutton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('KeyAge')}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontWeight: '400', fontSize: 16}}>Or sign in with</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 8, marginLeft: 138}}>
          <Image
            style={{width: 34, height: 34}}
            source={require('../Image/logoGoogle.png')}
          />
          <Image
            style={{width: 34, height: 34, marginLeft: 32}}
            source={require('../Image/logoFacebook.png')}
          />
        </View>
        <View style={{flexDirection: 'row', marginLeft: 87, marginTop: 22}}>
          <Text style={{fontSize: 16, color: '#000000'}}>
            Already a member?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#2190CD', fontSize: 16, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  imageLogo: {
    width: 109,
    height: 57,
    marginTop: 73,
    marginLeft: 160,
  },
  container: {
    paddingHorizontal: 25,
  },

  textlogin: {
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    alignContent: 'center',
    marginBottom: 1,

    flexDirection: 'row',
    marginTop: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  button: {
    padding: 12,
    marginTop: 10,
    marginBottom: 10,
    width: 380,
    height: 48,
    borderRadius: 32,
    borderWidth: 1,

    marginHorizontal: 10,
    backgroundColor: '#2190CD',
    borderColor: '#2190CD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    marginTop: 24,
    borderWidth: 1,
    width: 380,
    height: 48,
    borderRadius: 10,
    borderColor: '#EFF3F6',
    backgroundColor: '#EFF3F6',
    color: '#114A69',
    fontSize: 16,
    fontWeight: '500',
  },
  Viewbutton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
  },
});
