import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLOR from '../../constants/COLOR';
import {Picker} from '@react-native-picker/picker';
import Button from '../../Components/UI/Button';

const App = ({navigation}: {navigation: any}) => {
  const [selectedValue, setSelectedValue] = useState('java');
  const [phone, setphone] = useState('');
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
          <Text style={styles.textAdd}>Add friend</Text>
        </View>
      </View>
      <View style={styles.containeraddFriend}>
        <Text style={styles.textaddFriend}>Add friend with number phone:</Text>

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

        <Text
          style={{
            opacity: 20,
            fontWeight: '700',
            fontSize: 18,
            color: COLOR.blue_2,
            marginLeft: 200,
            marginTop: 20,
          }}>
          OR
        </Text>
        <Text
          style={{
            marginLeft: 24,
            marginTop: 10,
            fontWeight: '400',
            fontSize: 14,
          }}>
          Add friend with Email
        </Text>
        <View
          style={{
            paddingHorizontal: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLOR.blue_4,
            width: 295,
            height: 40,

            marginLeft: 24,
          }}>
          <TextInput
            style={{fontWeight: '400', fontSize: 16}}
            onChangeText={text => setphone(text)}
            placeholder="Example@gmail.com"
          />
        </View>
      </View>
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
                color: '#FFFFFF',
              }}>
              Search friend
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
    </SafeAreaView>
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
  containeraddFriend: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 227,
    borderRadius: 16,
    elevation: 15,
    marginTop: 26,
    marginLeft: 24,
  },
  textaddFriend: {
    marginLeft: 24,
    marginTop: 16,
    fontWeight: '400',
    fontSize: 14,
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
