import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <TouchableOpacity
        onPress={() => setCounter(counter => counter + 1)}
        style={styles.fabLocationBR}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCounter(counter => counter - 1)}
        style={styles.fabLocationBL}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15
  },
  fab: {
    alignItems: 'center',
    backgroundColor: '#5856d6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  fabText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  fabLocationBR: {
    bottom: 25,
    position: 'absolute',
    right: 25
  },
  fabLocationBL: {
    bottom: 25,
    position: 'absolute',
    left: 25
  }
})

export default CounterScreen
