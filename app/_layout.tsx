import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import "../global.css";

const _layout = () => {
  return (
    
     <Stack>
      <Stack.Screen name='index' options={{headerShown:false}}  />
     </Stack>
    
  )
}

export default _layout

const styles = StyleSheet.create({})
