import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { fetchCarDetail, fetchCarList } from "../Services/Car";

export default class CarListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carList: [],
    };
  }
  componentDidMount() {
    const carList = fetchCarList();
    this.setState({ carList });
  }
  renderCar({ item }) {
    return (
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          height: 60,
          width: "95%",
          // flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#e9e9e9",
          alignContent: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.modelName}</Text>
      </View>
    );
  }
  render() {
    return (
      <View>
        <FlatList data={this.state.carList} renderItem={this.renderCar} />
      </View>
    );
  }
}
