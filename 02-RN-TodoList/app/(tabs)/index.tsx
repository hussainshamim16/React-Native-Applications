import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const index = () => {
  const [Inputvalue, setInputvalue] = useState('')
  const [TodoAdder, setTodoAdder] = useState([])
  const AddingTodo = () => {

    TodoAdder.push(Inputvalue)
    console.log("Add Todo", TodoAdder)
    setInputvalue('')

  }

  return (
    <SafeAreaView style={styles.boody}>
      <Text style={styles.Headinger}>
        TODO LIST
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Task'
        onChangeText={setInputvalue}
        value={Inputvalue}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={AddingTodo}
      >
        <Text style={styles.press}
        >Add Todo</Text>
      </TouchableOpacity>


      <FlatList
        data={TodoAdder}
        style={styles.List}
        renderItem={({ item, index }) => {
          return <View style={styles.it}>
            <Text style={styles.textLi}>
              {item}
            </Text>


            {/* edit button */}
            <TouchableOpacity
              style={styles.buttonE}
              activeOpacity={0.8}
              // onPress={AddingTodo}
            >
              <Text style={{
                color: "black",
                fontWeight: 700,
                fontSize: 12,
               
                
              }}
              >Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonE}
              activeOpacity={0.8}
              // onPress={AddingTodo}
            >
              <Text style={{
                color: "black",
                fontWeight: 700,
                fontSize: 12,
          
               
              }}
              >Delete</Text>
            </TouchableOpacity>

          </View>
        }}
      >

      </FlatList>
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
  buttonE: {
    alignItems: 'center',
    backgroundColor: '#fff',
    // color: "black",
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 4,
    borderRadius: 5,
    paddingHorizontal: 16,
  },
  press: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
  },
  List: {
    marginHorizontal: 10,
    color: "white",
  },
  it: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
    ,flexDirection: "row",
    marginTop: 10,
    backgroundColor: "black",
    padding: 10,
    paddingLeft: 30,

  },
  textLi: {
    fontSize: 17,
    fontFamily: "sans-serif",
    color: "white",
    fontWeight: 800
  }
})
export default index