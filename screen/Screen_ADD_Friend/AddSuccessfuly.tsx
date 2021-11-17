import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLOR from '../../constants/COLOR';

import Button from '../../Components/UI/ButtonWhite';
const AddSuccessfuly = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.allcontainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.logoBack}
            source={require('../../Image/back.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerlogoProfile}>
        <Image
          style={styles.logoProfile}
          source={require('../../Image/logoProfileBig.png')}
        />
        <Text style={styles.textProfile}>John Doe</Text>
      </View>
      <View style={styles.containerProfile}>
        <View style={{flexDirection: 'row', marginLeft: 32, marginTop: 16}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLOR.blue_8}}>
            Gender
          </Text>
          <View style={{flex: 1}}>
            <Text
              style={{
                alignSelf: 'flex-end',
                marginRight: 32,
                fontSize: 14,
                fontWeight: '400',
                color: COLOR.blue_8,
              }}>
              Male
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 32, marginTop: 10}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLOR.blue_8}}>
            Age
          </Text>
          <View style={{flex: 1}}>
            <Text
              style={{
                alignSelf: 'flex-end',
                marginRight: 32,
                fontSize: 14,
                fontWeight: '400',
                color: COLOR.blue_8,
              }}>
              58
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 32, marginTop: 10}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLOR.blue_8}}>
            Birthday
          </Text>
          <View style={{flex: 1}}>
            <Text
              style={{
                alignSelf: 'flex-end',
                marginRight: 32,
                fontSize: 14,
                fontWeight: '400',
                color: COLOR.blue_8,
              }}>
              14/11/1963
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 32, marginTop: 10}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLOR.blue_8}}>
            Telephone
          </Text>
          <View style={{flex: 1}}>
            <Text
              style={{
                alignSelf: 'flex-end',
                marginRight: 32,
                fontSize: 14,
                fontWeight: '400',
                color: COLOR.blue_8,
              }}>
              965 267 85
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 32, marginTop: 10}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLOR.blue_8}}>
            Location
          </Text>
          <View style={{flex: 1}}>
            <Text
              style={{
                alignSelf: 'flex-end',
                marginRight: 32,
                fontSize: 14,
                fontWeight: '400',
                color: COLOR.blue_8,
              }}>
              Tampine
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 16,
          color: COLOR.blue_4,
          marginLeft: 36,
          marginTop: 16,
        }}>
        Friend request has been sent successfuly{' '}
      </Text>
      <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('ButtonAddFriend')}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: COLOR.blue_5,
              }}>
              Cancel request
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default AddSuccessfuly;
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
  logoBack: {
    width: 12,
    height: 21,
    marginLeft: 30,
    marginTop: 49,
  },
  containerlogoProfile: {
    alignItems: 'center',
  },
  logoProfile: {
    width: 120,
    height: 120,
  },
  textProfile: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.blue_8,
  },
  containerProfile: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 164,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
  },
  containerButton: {
    marginLeft: 24,
    marginTop: 24,
  },
});
