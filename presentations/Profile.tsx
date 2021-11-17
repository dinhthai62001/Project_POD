import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import Button from '../Components/UI/Button';
import ButtonWhite from '../Components/UI/ButtonWhite';
import COLOR from '../constants/COLOR';
import {Profile} from '../Data/Data_Profile';
import ATM_Profile from '../Components/ATM/Profile';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
const App = ({navigation}: {navigation: any}) => {
  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Detele account',
      'Are you sure you want to delete this account',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('OK Pressed'),
        },
        {text: 'Delete', onPress: () => navigation.navigate('Register')},
      ],
    );

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle}></View>
        </View>
      </View>
    );
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 24,
          borderBottomWidth: 1,
          borderBottomColor: '#6CB6DD',
        }}>
        <Image
          style={{width: 32, height: 32}}
          source={require('../Image/OpCamera.png')}
        />
        <Text style={{marginLeft: 10, marginTop: 6}}>Open Camera</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 24,
          borderBottomWidth: 1,
          borderBottomColor: '#6CB6DD',
          marginTop: 10,
        }}>
        <Image
          style={{width: 32, height: 32}}
          source={require('../Image/OpImage.png')}
        />
        <Text style={{marginLeft: 10, marginTop: 6}}>Choose from album</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 24,
          borderBottomWidth: 1,
          borderBottomColor: '#6CB6DD',
          marginTop: 10,
        }}>
        <Image
          style={{width: 32, height: 32}}
          source={require('../Image/OpLogo.png')}
        />
        <Text style={{marginLeft: 10, marginTop: 6}}>
          Remove profile picture
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.allcontainer}>
        <View style={styles.container}>
          <View style={{marginLeft: 24}}>
            <Image style={styles.logo} source={require('../Image/Logo.png')} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AddFreind')}>
            <Image
              style={styles.logofriend}
              source={require('../Image/friend.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Image
            style={{width: 120, height: 120, position: 'absolute'}}
            source={require('../Image/logoProfileBig.png')}
          />
        </View>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Image
            style={{width: 32, height: 32, marginTop: 10, marginLeft: 230}}
            source={require('../Image/logoCamera.png')}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '700', color: COLOR.blue_8}}>
            John Doe
          </Text>
        </View>
        <View style={styles.containerWHBMI}>
          <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 10}}>
            <Text style={{fontWeight: '700', fontSize: 16}}>Weight</Text>
            <Text style={{marginLeft: 70, fontWeight: '700', fontSize: 16}}>
              Height
            </Text>
            <Text style={{marginLeft: 90, fontWeight: '700', fontSize: 16}}>
              BMI
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 40}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '700', fontSize: 24, color: COLOR.blue_5}}>
                53
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  color: COLOR.blue_5,
                  marginTop: 8,
                }}>
                kg
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 73,
                  fontWeight: '700',
                  fontSize: 24,
                  color: COLOR.blue_5,
                }}>
                171
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  color: COLOR.blue_5,
                  marginTop: 8,
                }}>
                cm
              </Text>
            </View>
            <Text
              style={{
                marginLeft: 70,
                fontWeight: '700',
                fontSize: 24,
                color: COLOR.blue_5,
              }}>
              18.3
            </Text>
          </View>
        </View>
        <View style={styles.containerLastest}>
          <View style={{marginLeft: 32, marginTop: 16}}>
            <Text
              style={{fontWeight: '700', fontSize: 16, color: COLOR.blue_8}}>
              The lastest results
            </Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={{fontWeight: '400', fontSize: 14}}>Uric Acid</Text>
              <Text style={{marginLeft: 150, fontWeight: '400', fontSize: 14}}>
                Cholesterol level
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{color: COLOR.blue_5, fontWeight: '700', fontSize: 18}}>
                5 mg/dL
              </Text>
              <Text
                style={{
                  marginLeft: 150,
                  color: COLOR.blue_5,
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                189 mg/dL
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Text style={{fontWeight: '400', fontSize: 14}}>
                Glucose level
              </Text>
              <Text style={{marginLeft: 150, fontWeight: '400', fontSize: 14}}>
                ECG
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: COLOR.red, fontWeight: '700', fontSize: 18}}>
                126 mg/dL
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('ViewECG')}>
                <Text
                  style={{
                    marginLeft: 125,
                    color: COLOR.link,
                    fontWeight: '700',
                    fontSize: 18,
                  }}>
                  View my ECG
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: 385,
            height: 304,
            borderRadius: 16,
            elevation: 15,
            marginTop: 16,
            marginLeft: 24,
          }}>
          <FlatList
            data={Profile}
            renderItem={({item}) => (
              <ATM_Profile
                gender={item.gender}
                age={item.age}
                birthday={item.birthday}
                phone={item.phone}
                emergency={item.emergency}
                location={item.location}
                health={item.health}
                blood={item.blood}
                allergy={item.allergy}
                activeness={item.activeness}
              />
            )}
          />
        </View>

        <View style={styles.containerButton}>
          <ButtonWhite>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateContact')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 24, height: 24, top: 7}}
                source={require('../Image/iconsCall.png')}
              />
              <Text
                style={{
                  marginTop: 12,
                  fontWeight: '700',
                  fontSize: 16,
                  color: COLOR.blue_5,
                  marginLeft: 5,
                }}>
                Update contact
              </Text>
            </TouchableOpacity>
          </ButtonWhite>
        </View>

        <View style={styles.containerButton}>
          <Button>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 24, height: 24, top: 7}}
                source={require('../Image/iconsVideo.png')}
              />
              <Text
                style={{
                  marginTop: 12,
                  fontWeight: '700',
                  fontSize: 16,
                  color: '#FFFFFF',
                  marginLeft: 5,
                }}>
                Share with Doctor
              </Text>
            </TouchableOpacity>
          </Button>
        </View>

        <View style={styles.ButtonLog}>
          <View style={{marginLeft: 16, marginTop: 16}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{fontWeight: '500', fontSize: 16, color: COLOR.red}}>
                Log Out
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={createTwoButtonAlert}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                  color: COLOR.red,
                  marginTop: 10,
                }}>
                Delete account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[470, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        renderHeader={renderHeader}
        initialSnap={1}
        enabledGestureInteraction={true}
        callbackNode={fall}
      />
    </ScrollView>
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
  logofriend: {
    marginLeft: 290,
    height: 17,
    width: 20,
    marginTop: 56,
  },
  logo: {
    marginTop: 49,
    width: 69,
    height: 36,
  },
  containerWHBMI: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 65,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
  },
  containerLastest: {
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
    marginTop: 16,
  },
  ButtonLog: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 88,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
  },
  header: {
    backgroundColor: '#fFFFff',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 80,
    height: 6,
    borderRadius: 8,
    backgroundColor: '#00000040',
    marginBottom: 10,
    opacity: 0.7,
  },
});
