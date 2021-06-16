import React from 'react'
import { View, StyleSheet } from 'react-native';

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425b',
    flex: 1
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    borderColor: '#ffffff',
    borderWidth: 10,
    height: 100,
    width: 100
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
    borderColor: '#ffffff',
    borderWidth: 10,
    height: 100,
    width: 100
  },
  blueBox: {
    backgroundColor: '#28c4d9',
    borderColor: '#ffffff',
    borderWidth: 10,
    height: 100,
    width: 100
  }
});