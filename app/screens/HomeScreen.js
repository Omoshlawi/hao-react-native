import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeAreaScreen from '../components/AppSafeAreaScreen'
import colors from '../utils/colors'

const HomeScreen = () => {
  return (
    <AppSafeAreaScreen>
      <Text style={styles.title}>Lets Find you an Apartment</Text>
    </AppSafeAreaScreen>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        padding: 30,
        fontWeight: "bold",
        color: colors.primary
    }
})