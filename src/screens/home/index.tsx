import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { customTextButton, rocketIcon } from "../../components/shared/Icons";
import { StatusBar } from "expo-status-bar";

const IndexScreen = () => {
  const { user } = useSelector((state: any) => state.user);

  console.log("role", user);
  return (
    <View style={styles.container}>
      {rocketIcon}
      {customTextButton}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default IndexScreen;
