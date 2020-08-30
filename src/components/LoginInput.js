import React from "react";
import { View, TextInput, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    // const TF = false;
    // if (this.props.secure === "T") {
    //   TF = true;
    // }
  }
  render() {
    const TF = Boolean(this.props.secure);
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "red",
          borderRadius: 5,
          marginBottom: 10,
          height: 40,
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          style={{ marginLeft: 10, width: 40 }}
          name={this.props.icon}
          size={30}
          color="gray"
        />
        <TextInput
          style={{
            flex: 1,
            height: 40,
          }}
          placeholder={this.props.placeholder}
          secureTextEntry={TF}
        ></TextInput>
      </View>
    );
  }
}
