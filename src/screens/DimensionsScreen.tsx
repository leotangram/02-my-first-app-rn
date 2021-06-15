import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const DimenssionsScreen = () => {
  const {height, width} = useWindowDimensions()
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 2}} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>Width: {width}, Height: {height}</Text>
    </View>
  )
}

export default DimenssionsScreen

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: 'red'
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%'
  },
  orangeBox: {
    backgroundColor: '#f0a23b'
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
});