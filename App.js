/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Navigation from './app/Navigation/Navigation';
import CustomHeader from './app/features/CustomHeader';

export default function app() {
  return (
    <>
      {/* <CustomHeader /> */}
      <View style={styles.Header}>
        <Text style={styles.headerText}>Instagram</Text>
      </View>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'notoserif',
  },
});
