import React from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
export default class SampleDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    let PageId = props.navigation.getParam("PageId");
    if (!PageId) {
      PageId = 1;
    }
    this.state = {
      PageId: PageId,
    };
  }
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
          <Text style={[styles.container]}>
            상세 스크린!{this.state.PageId}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push("SampleDetails", {
                PageId: this.state.PageId + 1,
              })
            }
          >
            <Text style={[styles.container, { color: "blue" }]}>
              디테일의 디테일 가기!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={[styles.container, { color: "yellow" }]}>
              뒤로가기!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
            <Text style={[styles.container, { color: "tomato" }]}>
              처음으로 가기!
            </Text>
          </TouchableOpacity>
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
