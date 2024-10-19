import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const index = () => {
  const [Inputvalue, setInputvalue] = useState('')
  const inputEver = () => {
console.log("Add Todo")
  }
  return (
    <SafeAreaView style={styles.boody}>
      <Text style={styles.Headinger}>
        TODO LIST
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Task'
        onChangeText={inputEver}
      // value={}
      />

      <TouchableOpacity
        style={styles.button}
        //  onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.press}>Add Todo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// adding Css 
const styles = StyleSheet.create({
  boody: {
    flex: 1,
    padding: 20,
    // backgroundColor: "red"
  },
  Headinger: {
    fontSize: 50,
    fontWeight: 800,
    textAlign: "center",
    marginVertical: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 17,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    color: "#fff",
    marginHorizontal: 10,
    padding: 10,
  },
  press: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
  }
})
export default index