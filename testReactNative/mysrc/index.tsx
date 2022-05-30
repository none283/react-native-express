import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Formik } from "formik";

export type Props = {};

const MyIndex: React.FC<Props> = () => {
  const [texts, setText] = useState("");

  function submit() {
    axios.post(`http://172.16.125.158:3000/database/`, {
      word: texts,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput style={styles.input} onChangeText={setText} value={texts} />
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert(texts)}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: {
    display: "flex",
    width: 300,
    height: 120,
    padding: 10,
    fontSize: 32,
    backgroundColor: "yellow",
    marginTop: 200,
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 10,
  },
});

export default MyIndex;
