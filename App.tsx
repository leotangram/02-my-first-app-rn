import React from 'react'
import { SafeAreaView } from 'react-native'
import FlexScreen from './src/screens/FlexScreen';
import TaskScreen from './src/screens/TaskScreen';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#28425b',flex: 1}}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TaskScreen />
    </SafeAreaView>
  )
}

export default App
