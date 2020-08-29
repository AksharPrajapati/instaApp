import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Likes() {
  return (
    <View style={styles.container}>
      <Text>Likes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
