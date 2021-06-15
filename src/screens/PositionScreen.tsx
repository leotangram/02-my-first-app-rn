import React from 'react'
import { View, StyleSheet } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  )
}

export default PositionScreen

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#28c4d9',
      flex: 1,
      justifyContent: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856d6',
      borderColor: 'white',
      borderWidth: 10,
      height: 100,
      position: 'absolute',
      top: 0,
      width: 100,
    },
    orangeBox: {
      backgroundColor: '#f0a23b',
      borderColor: 'white',
      borderWidth: 10,
      height: 100,
      width: 100,
    }
});
