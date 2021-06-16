import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  )
}

export default FlexScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    flex: 1
  },
  box1: {
    borderColor: '#ffffff',
    borderWidth: 2,
    flex: 3 // 3 + 2 + 1 = 6
  },
  box2: {
    borderColor: '#ffffff',
    borderWidth: 2,
    flex: 2
  },
  box3: {
    borderColor: '#ffffff',
    borderWidth: 2,
    flex: 1
  }
});