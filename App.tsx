import React from 'react'
import { SafeAreaView } from 'react-native'
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionsScreen />
    </SafeAreaView>
  )
}

export default App
