import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Alert,
  Modal,
  Pressable,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const index = () => {
  const [Inputvalue, setInputvalue] = useState('')
  const [editVali, seteditVali] = useState('')
  const [TodoAdder, setTodoAdder] = useState(["hussain"])
  const [modalVisible, setModalVisible] = useState(false);

  //  Add Todo
  const AddingTodo = () => {
    TodoAdder.push(Inputvalue)
    console.log("Add Todo", TodoAdder)
    setInputvalue('')

  }

  // Edite Todo
  const EditeTodo = () => {

    console.log("EditeTodo", editVali)
  }

  // Delete Todo
  const DeleteTodo = (e) => {
    console.log("DeleteTodo", e)

    TodoAdder.splice(e, 1)
    setTodoAdder([...TodoAdder])

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
              // onPress={EditeTodo}
              onPress={() => setModalVisible(true)}
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
              onPress={() => DeleteTodo(index)}
            >
              <Text style={{
                color: "black",
                fontWeight: 700,
                fontSize: 12,


              }}
              >Delete</Text>
            </TouchableOpacity>

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Edit</Text>


                  <TextInput
                    style={styles.input}
                    placeholder='Edite Value'
                    onChangeText={seteditVali}
                    value={editVali}
                  />

                  <View
                    style={
                      {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        // backgroundColor: "red",
                        width: 250,
                      }
                    }
                  >
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={EditeTodo}>
                      <Text style={styles.textStyle}>Save</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Cencel</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
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
    , flexDirection: "row",
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
  },
  modalView: {
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 17,
    textTransform: 'uppercase'
  },
})
export default index