import React from 'react'
import { SafeAreaView } from 'react-native'
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  )
}

export default App
