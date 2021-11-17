import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import COLOR from '../../constants/COLOR';

const InformationItem = (props:any) => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginLeft: 32, marginTop: 16}}>
        <Text style={styles.textitem}>Gender</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.gender}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Age</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.age}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Birthday</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.birthday}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Phone number</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.phone}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Emergency Contact</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.emergency}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Location</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.location}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Health Condition</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.health}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Blood type</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.blood}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Allergy</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.allergy}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <Text style={styles.textitem}>Activeness</Text>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.activeness}</Text>
        </View>
      </View>
    </View>
  );
};

export default InformationItem;

const styles = StyleSheet.create({
  titles: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Mulish',
    color: '#114A69',
    opacity: 0.8,
  },
  title: {
    alignSelf: 'flex-end',
    marginRight: 32,
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.blue_8,
    opacity: 0.5,
  },
  viewItem: {
    flexDirection: 'row',
    marginLeft: 32,
    marginTop: 10,
  },
  textitem: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.blue_8,
  },
});
