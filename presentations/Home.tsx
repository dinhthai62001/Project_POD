import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import COLOR from '../constants/COLOR';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from 'react-native-responsive-linechart';
import {BarChart} from 'react-native-gifted-charts';
import LinearGradient from 'react-native-linear-gradient';

const App = ({navigation}: {navigation: any}) => {
  const [inputShown, setInputShown] = useState<boolean>(false);
  const [inputShown2, setInputShown2] = useState<boolean>(false);
  const [inputShown6, setInputShown6] = useState<boolean>(false);

  const data1 = [
    {x: 4, y: 60},
    {x: 5, y: 65},
    {x: 6, y: 56},
    {x: 7, y: 60},
    {x: 8, y: 75},
    {x: 9, y: 80},
    {x: 10, y: 79},
    {x: 11, y: 75},
  ];

  const data2 = [
    {x: 4, y: 81},
    {x: 5, y: 83},
    {x: 6, y: 86},
    {x: 7, y: 78},
    {x: 8, y: 86},
    {x: 9, y: 60},
    {x: 10, y: 70},
    {x: 11, y: 88},
  ];
  const data3 = [
    {x: 4, y: 121},
    {x: 5, y: 135},
    {x: 6, y: 145},
    {x: 7, y: 160},
    {x: 8, y: 150},
    {x: 9, y: 159},
    {x: 10, y: 145},
    {x: 11, y: 160},
  ];
  const barData = [
    {value: 49, label: 'M', frontColor: '#177AD5'},
    {value: 60, label: 'T', frontColor: '#177AD5'},
    {value: 75, label: 'W', frontColor: '#177AD5'},
    {value: 45, label: 'K', frontColor: '#177AD5'},
    {value: 82, label: 'Y', frontColor: 'red'},
    {value: 30, label: 'T', frontColor: '#177AD5'},
    {value: 55, label: 'F', frontColor: '#177AD5'},
  ];

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
        <Image
          style={styles.logoMorning}
          source={require('../Image/logoMorning.png')}
        />

        <View style={{display: inputShown == false ? 'flex' : 'none'}}>
          <View style={styles.containerUricAcid}>
            <Image
              style={styles.logoUric}
              source={require('../Image/logoUric.png')}
            />
            <Text style={styles.textUric}>Easy Doctor Uric Acid</Text>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  setInputShown(true);
                }}>
                <Image
                  style={styles.ADD}
                  source={require('../Image/add.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{display: inputShown == true ? 'flex' : 'none'}}
          onTouchEnd={() => setInputShown(false)}>
          <View style={styles.buttonContainerECG}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.logoUric}
                source={require('../Image/logoUric.png')}
              />
              <Text style={styles.textUric1}>Easy Doctor Uric Acid</Text>
            </View>
            <View style={styles.containerWeekMonth}>
              <View
                style={{
                  width: 175,
                  height: 30,
                  backgroundColor: '#fff',
                  elevation: 8,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Week</Text>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 70}}>
                <Text>Month</Text>
              </View>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={{marginLeft: 16}}>
                <Text style={{fontWeight: '400', fontSize: 10, opacity: 0.5}}>
                  High{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 10,
                    opacity: 0.5,
                    marginTop: 40,
                  }}>
                  Normal(50){' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 10,
                    opacity: 0.5,
                    marginTop: 40,
                  }}>
                  Low{' '}
                </Text>
              </View>
              <BarChart
                width={300}
                height={100}
                barWidth={10}
                noOfSections={5}
                barBorderRadius={10}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                maxValue={82}
              />
            </View>
            <View style={{marginTop: 6, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 16,
                  fontSize: 12,
                  fontWeight: '400',
                  opacity: 0.5,
                }}>
                05-11/01/2021 3:32 PM
              </Text>
              <Text
                style={{
                  marginLeft: 150,
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#F8BA56',
                }}>
                wk avg 78
              </Text>
            </View>
          </View>
        </View>
        <View style={{display: inputShown2 == false ? 'flex' : 'none'}}>
          <View style={styles.containerECG}>
            <Image
              style={styles.logoECG}
              source={require('../Image/logoECG.png')}
            />
            <Text style={styles.textECG}>Easy Doctor ECG</Text>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  setInputShown2(true);
                }}>
                <Image
                  style={styles.ADD}
                  source={require('../Image/add.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{display: inputShown2 == true ? 'flex' : 'none'}}
          onTouchEnd={() => setInputShown2(false)}>
          <View style={styles.buttonContainerECG}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.logoECG}
                source={require('../Image/logoECG.png')}
              />
              <Text style={styles.textECG1}>Easy Doctor ECG</Text>
            </View>
            <View style={styles.containerWeekMonth}>
              <View
                style={{
                  width: 175,
                  height: 30,
                  backgroundColor: '#fff',
                  elevation: 8,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Week</Text>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 70}}>
                <Text>Month</Text>
              </View>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={{marginLeft: 16}}>
                <Text style={{fontWeight: '400', fontSize: 10, opacity: 0.5}}>
                  High{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 10,
                    opacity: 0.5,
                    marginTop: 40,
                  }}>
                  Normal(50){' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 10,
                    opacity: 0.5,
                    marginTop: 40,
                  }}>
                  Low{' '}
                </Text>
              </View>
              <BarChart
                width={300}
                height={100}
                barWidth={10}
                noOfSections={5}
                barBorderRadius={10}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                maxValue={82}
              />
            </View>
            <View style={{marginTop: 6, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 16,
                  fontSize: 12,
                  fontWeight: '400',
                  opacity: 0.5,
                }}>
                05-11/01/2021 3:32 PM
              </Text>
              <Text
                style={{
                  marginLeft: 150,
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#F8BA56',
                }}>
                wk avg 78
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containerBloodPressure}>
          <Image
            style={styles.logoBloodPressure}
            source={require('../Image/BloodPressure.png')}
          />
          <Text style={styles.textBloodPressure}>
            Easy Doctor Blood Pressure
          </Text>
          <View style={{flex: 1}}>
            <Image style={styles.ADD} source={require('../Image/add.png')} />
          </View>
        </View>

        <View style={styles.containerBloodGlucose}>
          <Image
            style={styles.logoBloodGlucose}
            source={require('../Image/BloodGlucose.png')}
          />
          <Text style={styles.textBloodGlucose}>Easy Doctor Blood Glucose</Text>
          <View style={{flex: 1}}>
            <Image style={styles.ADD} source={require('../Image/add.png')} />
          </View>
        </View>

        <View style={styles.containerCholestrol}>
          <Image
            style={styles.logoCholestrol}
            source={require('../Image/Cholestrol.png')}
          />
          <Text style={styles.textCholestrol}>Easy Doctor Cholestrol</Text>
          <View style={{flex: 1}}>
            <Image style={styles.ADD} source={require('../Image/add.png')} />
          </View>
        </View>
        <View style={{display: inputShown6 === false ? 'flex' : 'none'}}>
          <View style={styles.containerVital}>
            <Image
              style={styles.logoVital}
              source={require('../Image/Vital.png')}
            />
            <Text style={styles.textVital}>POD Vital</Text>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setInputShown6(true)}>
                <Image
                  style={styles.ADD}
                  source={require('../Image/add.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{display: inputShown6 === true ? 'flex' : 'none'}}
          onTouchEnd={() => setInputShown6(false)}>
          <View style={styles.buttonContainerECG}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.logoVital}
                source={require('../Image/Vital.png')}
              />
              <Text style={styles.textVital1}>POD Vital</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#5D5FEF',
                  marginTop: 22,
                  marginLeft: 170,
                }}>
                Julu 2021
              </Text>
            </View>
            <View style={styles.containerWeekMonth}>
              <View
                style={{
                  width: 175,
                  height: 30,
                  backgroundColor: '#fff',
                  elevation: 8,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Week</Text>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 70}}>
                <Text>Month</Text>
              </View>
            </View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,
                opacity: 0.5,
                marginLeft: 16,
                color: COLOR.blue_7,
              }}>
              mmHg - Pulse/min{' '}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {/* <View style={{marginLeft:16}}>
          <Text style={{fontWeight:'400',fontSize:10,opacity:0.5}}>High </Text>
          <Text style={{fontWeight:'400',fontSize:10,opacity:0.5,marginTop:40}}>Normal(50) </Text>
          <Text style={{fontWeight:'400',fontSize:10,opacity:0.5,marginTop:40}}>Low </Text>
          </View> */}

              <Chart
                style={{height: 145, width: '100%', marginTop: 3}}
                xDomain={{min: 4, max: 11}}
                yDomain={{min: 0, max: 200}}
                padding={{left: 40, bottom: 20, right: 20, top: 10}}>
                <VerticalAxis tickValues={[0, 40, 80, 120, 160, 200]} />
                <HorizontalAxis
                  tickCount={3}
                  tickValues={[4, 5, 6, 7, 8, 9, 10, 11]}
                />
                <Line
                  data={data1}
                  theme={{
                    stroke: {color: '#2190CD', width: 5},
                    scatter: {
                      default: {width: 8, height: 8, rx: 4, color: '#2190CD'},
                      selected: {color: 'red'},
                    },
                  }}
                />
                <Line
                  data={data2}
                  theme={{
                    stroke: {color: 'orange', width: 5},
                    scatter: {
                      default: {width: 8, height: 8, rx: 4, color: 'orange'},
                      selected: {color: 'red'},
                    },
                  }}
                />
                <Line
                  data={data3}
                  theme={{
                    stroke: {color: '#44bd32', width: 5},
                    scatter: {
                      default: {width: 8, height: 8, rx: 4, color: '#44ad32'},
                      selected: {color: 'red'},
                    },
                  }}
                />

                <Area
                  data={data3}
                  theme={{
                    gradient: {
                      from: {color: '#2190CD'},
                      to: {color: '#2190CD', opacity: 0.01},
                    },
                  }}
                />
              </Chart>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', marginLeft: 18}}>
                <Image
                  style={{width: 8, height: 8, marginTop: 5}}
                  source={require('../Image/iconBlue.png')}
                />
                <Text style={{marginLeft: 3}}>DIA</Text>
              </View>

              <View style={{flexDirection: 'row', marginLeft: 110}}>
                <Image
                  style={{width: 8, height: 8, marginTop: 5}}
                  source={require('../Image/iconGreen.png')}
                />
                <Text style={{marginLeft: 3}}>SYS</Text>
              </View>

              <View style={{flexDirection: 'row', marginLeft: 120}}>
                <Image
                  style={{width: 8, height: 8, marginTop: 5}}
                  source={require('../Image/iconOrange.png')}
                />
                <Text style={{marginLeft: 3}}>Pulse</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerSPO2}>
          <Image
            style={styles.logoSPO2}
            source={require('../Image/SPO2.png')}
          />
          <Text style={styles.textSPO2}>POD SPO2 </Text>
          <View style={{flex: 1}}>
            <Image style={styles.ADD} source={require('../Image/add.png')} />
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
  logoMorning: {
    width: 385,
    height: 100,
    borderRadius: 16,
    marginLeft: 24,
    marginTop: 16,
  },
  containerUricAcid: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 60,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
    flexDirection: 'row',
  },
  logoUric: {
    width: 44,
    height: 44,
    marginTop: 8,
    marginLeft: 16,
  },
  textUric1: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },
  textUric: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },
  ADD: {
    width: 17,
    height: 17,
    color: COLOR.blue_5,
    marginTop: 23,

    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 25,
  },
  containerECG: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 60,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
    flexDirection: 'row',
  },
  logoECG: {
    width: 44,
    height: 44,
    marginTop: 8,
    marginLeft: 16,
  },
  textECG: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },

  containerBloodPressure: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 60,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
    flexDirection: 'row',
  },
  logoBloodPressure: {
    width: 44,
    height: 44,
    marginTop: 8,
    marginLeft: 16,
  },
  textBloodPressure: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },

  containerBloodGlucose: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 60,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
    flexDirection: 'row',
  },
  logoBloodGlucose: {
    width: 44,
    height: 44,
    marginTop: 8,
    marginLeft: 16,
  },
  textBloodGlucose: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },

  containerCholestrol: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 60,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
    flexDirection: 'row',
  },
  logoCholestrol: {
    width: 44,
    height: 44,
    marginTop: 8,
    marginLeft: 16,
  },
  textCholestrol: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },
  containerVital: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 60,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
    flexDirection: 'row',
  },
  logoVital: {
    width: 44,
    height: 44,
    marginTop: 8,
    marginLeft: 16,
  },
  textVital: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },
  textVital1: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },

  containerSPO2: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 60,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
    flexDirection: 'row',
  },
  logoSPO2: {
    width: 44,
    height: 44,
    marginTop: 8,
    marginLeft: 16,
  },
  textSPO2: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },
  buttonContainerECG: {
    backgroundColor: '#ffffff',
    width: 385,
    height: 272,
    borderRadius: 16,
    elevation: 15,
    marginTop: 16,
    marginLeft: 24,
  },
  textECG1: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOR.blue_8,
    lineHeight: 18,
    marginTop: 22,
    marginLeft: 9,
  },
  containerWeekMonth: {
    width: 350,
    height: 32,
    elevation: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    marginLeft: 16,
    marginTop: 8,
  },
});
