import React from "react";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: " rgb(4, 12, 90)",
        borderBottomWidth: 1,
        alignItems: "center",
        borderColor: "#ddd",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        Hogwarts
      </Text>
    </View>
  );
}
