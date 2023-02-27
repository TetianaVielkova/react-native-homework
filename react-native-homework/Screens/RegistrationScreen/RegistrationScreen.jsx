import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKey, setIsShowKey] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const onLogin = () => {
    setIsShowKey(false);
    Keyboard.dismiss();

    console.log(state);

  };

  const keyboardHide = () => {
    setIsShowKey(false);
    Keyboard.dismiss();
    setState(initialState);
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground source={require("./../../assets/PhotoBG.jpg")} style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}
        >
        <View style={{...styles.form, paddingBottom: isShowKey ? 32 : 79}}>
        <Text style={styles.title}>Регистрация</Text>
          <TextInput
            value={state.login}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
            placeholder="Логин"
            style={styles.input}
            onFocus={() => setIsShowKey(true)}
          />
          <TextInput
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            placeholder="Адрес электронной почты"
            style={styles.input}
            onFocus={() => setIsShowKey(true)}
          />
          <View>
          <TextInput
            value={state.password}
            onChangeText={(value) =>
              setState((prevState) => ({
                ...prevState,
                password: value,
              }))}
            placeholder="Пароль"
            secureTextEntry={showPassword ? true : false}
            style={styles.input}
            onFocus={() => setIsShowKey(true)}
          />
          <TouchableOpacity style={styles.showPasswordBtn} activeOpacity={0.8} onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.showPasswordText}>{showPassword ? "Показать" : "Скрыть"}</Text>
          </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.boxButton} onPress={onLogin}>
                <Text style={styles.buttonText} >Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.text}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 130,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 25,
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    lineHeight: 19,
  },
  showPasswordBtn: {
    position: "absolute",
    right: 32,
    top: 32,
  },
  boxButton: {
    margin: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FF6C00',
    margin: 16,
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  input: {
    background: '#F6F6F6',
    paddingHorizontal: 16,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    margin: 16,
    fontFamily: "Roboto-Regular",
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: 'center',
    color: "#1B4371",
  },
});

export default RegistrationScreen;