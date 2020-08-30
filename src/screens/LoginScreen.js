import React from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
} from "react-native";
import LoginInput from "../components/LoginInput";
import MyButton from "../components/Button";
export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          marginTop: 40,
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.container}>Car Auction</Text>
        <LoginInput icon="ios-person" placeholder="아이디" />
        <LoginInput icon="ios-mail" placeholder="비밀번호" secure="t" />
        <MyButton></MyButton>
        <TouchableOpacity>
          <Text style={{ marginTop: 10 }}>회원가입</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
