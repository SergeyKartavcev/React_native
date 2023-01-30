import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  // const onLogin = () => {
  //   Alert.alert("Credentials", `${name} + ${password}`);
  // };
  // const onLongPress = () => {
  //   navigation.navigate("Registration",  { sessionId: 45, userId: "22e24" })
  // };
  const image = { uri: "https://reactjs.org/logo-og.png" };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>  
      <Image
            source={require("../image/PhotoBG.png")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
                 <View style={{
        flexDirection: 'row',
        height: 349,
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25 ,
        borderTopRightRadius: 25,
       
      }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Posts", { sessionId: 45, userId: "22e24",})
            }
          ><Text style={styles.titleText}>Войти</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.text}
            onPress={() =>
              navigation.navigate("Registration")
            }
          ><Text>Нет аккаунта? Зарегистрироваться</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 350,
  },
  text: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 50,
  },
  titleText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontfamily: "Roboto",
    fontStyle: "normal",
    marginTop: 15,
    fontSize: 20,
    lineHeight: 19,
  },
});
