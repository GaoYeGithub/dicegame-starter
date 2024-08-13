import React from 'react'
import { Text, View, ScrollView, StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

// You can import from local files
import Profilecard from './components/profilecard'
import Gamecontainer from './components/dicecontainer'
// or any pure javascript modules available in npm

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
       <Profilecard/>
       <Gamecontainer/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    paddingBottom: 60,
    paddingTop: Platform.OS == 'ios' ? Constants.statusBarHeight : null,
  },
})
