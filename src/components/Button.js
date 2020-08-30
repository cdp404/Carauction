import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
export default class MyButton extends Component {
  constructor(props) {
    super(props);
  }
  onPressButton1() {
    alert("로그인 하시겠습니까?");
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "red",
          borderRadius: 2,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          height: 40,
          //   flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
        onPress={this.onPressButton1}
      >
        <Text style={{ fontSize: 20, color: "white" }}>로그인</Text>
      </TouchableOpacity>
    );
  }
}
