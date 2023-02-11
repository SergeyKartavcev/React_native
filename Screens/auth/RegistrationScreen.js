import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Registration({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../image/PhotoBG.png")}
          style={styles.image}
        >
          <View style={styles.user}></View>
          <View style={styles.box}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Реєстрація</Text>
            </View>

            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <View style={{ marginTop: 33, marginBottom: 16 }}>
                  <TextInput
                    value={name}
                    textAlign={"center"}
                    onChangeText={nameHandler}
                    placeholder="Логин"
                    style={styles.input}
                  />
                </View>

                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    value={email}
                    textAlign={"center"}
                    onChangeText={emailHandler}
                    placeholder="Адрес электронной почты"
                    style={styles.input}
                  />
                </View>

                <View style={{ marginBottom: 44 }}>
                  <TextInput
                    value={password}
                    textAlign={"center"}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    onChangeText={passwordHandler}
                    style={styles.input}
                  />
                </View>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={styles.titleText} activeOpacity={0.5}>
                    Зарегистрироваться
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={{ marginTop: 16, alignItems: "center" }}
                >
                  <Text
                    style={{
                      width: 188,
                      height: 19,
                      fontFamily: "Roboto",
                      fontSize: 16,
                      color: "#00008b",
                    }}
                  >
                    У вас уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 1000,
    minWidth: 400,
    maxWidth: 1000,
    top: 263,
    left: 0,
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  form: {
    top: 100,
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 50,
  },
  titleText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontfamily: "Roboto-Regular",
    fontStyle: "normal",
    marginTop: 15,
    fontSize: 20,
    lineHeight: 19,
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    top: 100,
    fontSize: 30,
    color: "#212121",
    fontfamily: "Roboto-Regular",
  },
  user: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "black",
    top: 320,
    zIndex: 2,
  },
});
