import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <Text>Instagram</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
});
