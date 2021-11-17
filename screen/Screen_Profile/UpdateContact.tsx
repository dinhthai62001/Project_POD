import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import COLOR from '../../constants/COLOR';
import Button from '../../Components/UI/Button';
const UpdateContact = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.allcontainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.logoBack}
            source={require('../../Image/back.png')}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 136}}>
          <Text style={styles.textAdd}>Profile Doctors</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 24, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Gender{' '}
        </Text>
        <Text
          style={{
            marginLeft: 180,
            fontWeight: '500',
            fontSize: 14,
            color: COLOR.blue_8,
          }}>
          Age{' '}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 24, marginTop: 7}}>
        <View
          style={{
            width: 156,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14}}>Male</Text>
          <Image
            style={{marginLeft: 70, width: 12, height: 10, marginTop: 7}}
            source={require('../../Image/drop.png')}
          />
        </View>

        <View
          style={{
            width: 156,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            flexDirection: 'row',

            borderRadius: 8,
            alignItems: 'center',
            marginLeft: 71,
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, marginLeft: 17}}>
            58
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 12, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Birthday{' '}
        </Text>
        <Text
          style={{
            marginLeft: 180,
            fontWeight: '500',
            fontSize: 14,
            color: COLOR.blue_8,
          }}>
          Blood Age{' '}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 24, marginTop: 7}}>
        <View
          style={{
            width: 156,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            flexDirection: 'row',

            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14, marginLeft: 16}}>
            14/11/1963
          </Text>
        </View>

        <View
          style={{
            width: 156,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 8,
            alignItems: 'center',
            marginLeft: 71,
          }}>
          <Text style={{fontWeight: '400', fontSize: 14}}>AB</Text>
          <Image
            style={{marginLeft: 80, width: 12, height: 10, marginTop: 7}}
            source={require('../../Image/drop.png')}
          />
        </View>
      </View>
      <View style={{marginTop: 12, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Phone number
        </Text>
        <View
          style={{
            width: 385,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            borderRadius: 8,
            paddingHorizontal: 10,
            marginTop: 5,
          }}>
          <TextInput
            style={{fontSize: 14, fontWeight: '400'}}
            placeholder="Phone"
            keyboardType="number-pad"
            value="065 267 8566"
          />
        </View>
      </View>

      <View style={{marginTop: 12, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Emergency contact
        </Text>
        <View
          style={{
            width: 385,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            borderRadius: 8,
            paddingHorizontal: 10,
            marginTop: 5,
          }}>
          <TextInput
            style={{fontSize: 14, fontWeight: '400'}}
            placeholder="Phone"
            keyboardType="number-pad"
            value="084 556 4479"
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 24, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Country
        </Text>
        <Text
          style={{
            marginLeft: 90,
            fontWeight: '500',
            fontSize: 14,
            color: COLOR.blue_8,
          }}>
          Cty
        </Text>
        <Text
          style={{
            marginLeft: 90,
            fontWeight: '500',
            fontSize: 14,
            color: COLOR.blue_8,
          }}>
          District
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 24, marginTop: 7}}>
        <View
          style={{
            width: 98,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '400', fontSize: 14}}>Tampines</Text>
          <Image
            style={{marginLeft: 10, width: 12, height: 10, marginTop: 3}}
            source={require('../../Image/drop.png')}
          />
        </View>

        <View
          style={{
            width: 98,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 8,
            alignItems: 'center',
            marginLeft: 35,
          }}>
          <Text style={{fontWeight: '400', fontSize: 14}}>Tampines</Text>
          <Image
            style={{marginLeft: 10, width: 12, height: 10, marginTop: 3}}
            source={require('../../Image/drop.png')}
          />
        </View>
        <View
          style={{
            width: 98,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 8,
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Text style={{fontWeight: '400', fontSize: 14}}>Tampines</Text>
          <Image
            style={{marginLeft: 10, width: 12, height: 10, marginTop: 3}}
            source={require('../../Image/drop.png')}
          />
        </View>
      </View>

      <View style={{marginTop: 12, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Health Condition
        </Text>
        <View
          style={{
            width: 385,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            borderRadius: 8,
            paddingHorizontal: 10,
            marginTop: 5,
          }}>
          <TextInput
            style={{fontSize: 14, fontWeight: '400'}}
            placeholder="Tell us about your health"
          />
        </View>
      </View>

      <View style={{marginTop: 12, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Allergy
        </Text>
        <View
          style={{
            width: 385,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            borderRadius: 8,
            paddingHorizontal: 10,
            marginTop: 5,
          }}>
          <TextInput
            style={{fontSize: 14, fontWeight: '400'}}
            placeholder="Are you allergic to something"
          />
        </View>
      </View>

      <View style={{marginTop: 12, marginLeft: 24}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: COLOR.blue_8}}>
          Health Condition
        </Text>
        <View
          style={{
            width: 385,
            height: 40,
            borderWidth: 1,
            borderColor: '#6CB6DD',
            borderRadius: 8,
            paddingHorizontal: 10,
            marginTop: 5,
          }}>
          <TextInput style={{fontSize: 14, fontWeight: '400'}} />
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
              Save changes
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default UpdateContact;
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
  logofriend: {
    marginLeft: 290,
    height: 17,
    width: 20,
    marginTop: 56,
  },
  textAdd: {
    marginTop: 49,

    fontWeight: '700',
    fontSize: 18,
    color: COLOR.blue_8,
  },
  containerButton: {
    marginLeft: 24,
    marginTop: 24,
  },
});
