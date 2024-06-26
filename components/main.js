import { StyleSheet, Text, View, Image } from "react-native";
import Main_header from "./main_header";

export default function main() {
  return (
    <View style={styles.container}>
      <Main_header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  
});
