import React from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  View,
} from "react-native";
export default class SampleHomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <KeyboardAvoidingView
          style={{
            marginTop: 40,
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.container, { color: "blue" }]}>홈 스크린!</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SampleDetails")}
          >
            <Text style={[styles.container, { color: "red" }]}>
              디테일 가기!
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
