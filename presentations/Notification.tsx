import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import COLOR from '../constants/COLOR';
const App = ({navigation}: {navigation: any}) => {
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
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            color: COLOR.blue_6,
            marginTop: 16,
            marginLeft: 24,
          }}>
          Friend requyest
        </Text>
        <View
          style={{
            width: '100%',
            height: 113,
            marginTop: 16,
            flexDirection: 'row',
            backgroundColor: COLOR.blue_1,
          }}>
          <Image
            style={{width: 65, height: 64, marginTop: 8, marginLeft: 24}}
            source={require('../Image/logoMRMING.png')}
          />
          <View style={{marginLeft: 8, marginTop: 16}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '700', fontSize: 14, color: COLOR.blue_8}}>
                {' '}
                MR.Ming
              </Text>
              <Text style={{fontWeight: '400', fontSize: 14, marginLeft: 4}}>
                sent you a friend request
              </Text>
            </View>
            <Text
              style={{
                marginTop: 3,
                fontWeight: '400',
                fontSize: 12,
                color: COLOR.blue_8,
                opacity: 20,
              }}>
              10 hours ago
            </Text>
            <View style={{flexDirection: 'row', marginTop: 18}}>
              <TouchableOpacity
                style={{
                  width: 111,
                  height: 32,
                  borderWidth: 1,
                  borderColor: COLOR.blue_4,
                  borderRadius: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLOR.white,
                }}>
                <Text
                  style={{
                    color: COLOR.blue_4,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 12,
                  width: 111,
                  height: 32,
                  borderWidth: 1,
                  borderColor: COLOR.blue_4,
                  borderRadius: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLOR.blue_4,
                }}>
                <Text
                  style={{
                    color: COLOR.white,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 113,
            marginTop: 16,
            flexDirection: 'row',
            backgroundColor: COLOR.white,
          }}>
          <Image
            style={{width: 65, height: 64, marginTop: 8, marginLeft: 24}}
            source={require('../Image/logoLEEMIE.png')}
          />
          <View style={{marginLeft: 8, marginTop: 16}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '700', fontSize: 14, color: COLOR.blue_8}}>
                {' '}
                Lee Mie
              </Text>
              <Text style={{fontWeight: '400', fontSize: 14, marginLeft: 4}}>
                sent you a friend request
              </Text>
            </View>
            <Text
              style={{
                marginTop: 3,
                fontWeight: '400',
                fontSize: 12,
                color: COLOR.blue_8,
                opacity: 20,
              }}>
              10 hours ago
            </Text>
            <View style={{flexDirection: 'row', marginTop: 18}}>
              <TouchableOpacity
                style={{
                  width: 111,
                  height: 32,
                  borderWidth: 1,
                  borderColor: COLOR.blue_4,
                  borderRadius: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLOR.white,
                }}>
                <Text
                  style={{
                    color: COLOR.blue_4,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 12,
                  width: 111,
                  height: 32,
                  borderWidth: 1,
                  borderColor: COLOR.blue_4,
                  borderRadius: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLOR.blue_4,
                }}>
                <Text
                  style={{
                    color: COLOR.white,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            color: COLOR.blue_6,
            marginTop: 8,
            marginLeft: 24,
          }}>
          Notifications
        </Text>

        <View
          style={{
            width: '100%',
            height: 88,
            marginTop: 16,
            flexDirection: 'row',
            backgroundColor: COLOR.blue_1,
          }}>
          <Image
            style={{width: 64, height: 64, marginTop: 12, marginLeft: 24}}
            source={require('../Image/Vital.png')}
          />
          <View style={{marginLeft: 8, marginTop: 25}}>
            <Text
              style={{fontWeight: '400', fontSize: 14, color: COLOR.blue_8}}>
              You have a medical exam tomorrow
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,
                color: COLOR.blue_5,
                marginTop: 5,
              }}>
              23 hours ago
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 88,
            marginTop: 8,
            flexDirection: 'row',
            backgroundColor: COLOR.white,
          }}>
          <Image
            style={{width: 64, height: 64, marginTop: 12, marginLeft: 24}}
            source={require('../Image/BloodPressure.png')}
          />
          <View style={{marginLeft: 8, marginTop: 25}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '400', fontSize: 14, color: COLOR.blue_8}}>
                Don't forget to add
              </Text>
              <Text
                style={{fontWeight: '700', fontSize: 14, color: COLOR.blue_8}}>
                {' '}
                Blood Pressure
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,

                marginTop: 5,
              }}>
              2 hours ago
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 88,
            marginTop: 8,
            flexDirection: 'row',
            backgroundColor: COLOR.white,
          }}>
          <Image
            style={{width: 64, height: 64, marginTop: 12, marginLeft: 24}}
            source={require('../Image/BloodGlucose.png')}
          />
          <View style={{marginLeft: 8, marginTop: 25}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '400', fontSize: 14, color: COLOR.blue_8}}>
                Don't forget to add
              </Text>
              <Text
                style={{fontWeight: '700', fontSize: 14, color: COLOR.blue_8}}>
                {' '}
                Blood Glucose
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,

                marginTop: 5,
              }}>
              2 hours ago
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 88,
            marginTop: 8,
            flexDirection: 'row',
            backgroundColor: COLOR.white,
          }}>
          <Image
            style={{width: 64, height: 64, marginTop: 12, marginLeft: 24}}
            source={require('../Image/logoMRMING.png')}
          />
          <View style={{marginLeft: 8, marginTop: 25}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '400', fontSize: 14, color: COLOR.blue_8}}>
                You missed call from Dr.Ming.
              </Text>
              <Text
                style={{fontWeight: '700', fontSize: 14, color: COLOR.blue_8}}>
                {' '}
                Dr. Ming.
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,

                marginTop: 5,
              }}>
              2 hours ago
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 88,
            marginTop: 8,
            flexDirection: 'row',
            backgroundColor: COLOR.white,
          }}>
          <Image
            style={{width: 64, height: 64, marginTop: 12, marginLeft: 24}}
            source={require('../Image/Cholestrol.png')}
          />
          <View style={{marginLeft: 8, marginTop: 25}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '400', fontSize: 14, color: COLOR.blue_8}}>
                Don't forget to mesure
              </Text>
              <Text
                style={{fontWeight: '700', fontSize: 14, color: COLOR.blue_8}}>
                {' '}
                Cholesterol
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,

                marginTop: 5,
              }}>
              2 hours ago
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 88,
            marginTop: 8,
            flexDirection: 'row',
            backgroundColor: COLOR.white,
          }}>
          <Image
            style={{width: 64, height: 64, marginTop: 12, marginLeft: 24}}
            source={require('../Image/logoHelth.png')}
          />
          <View style={{marginLeft: 8, marginTop: 25}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontWeight: '400', fontSize: 14, color: COLOR.blue_8}}>
                Don't dismiss health tips every day.
              </Text>
              <Text
                style={{fontWeight: '700', fontSize: 14, color: COLOR.blue_8}}>
                {' '}
                Cholesterol
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,

                marginTop: 5,
              }}>
              2 hours ago
            </Text>
          </View>
        </View>
      </View>
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
});
