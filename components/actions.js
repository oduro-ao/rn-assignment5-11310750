import { StyleSheet, Text, View, Image } from "react-native";

const icons = [
  require("../assets/icons/send.png"),
  require("../assets/icons/recieve.png"),
  require("../assets/icons/loan.png"),
  require("../assets/icons/topUp.png"),
];

export default function actions() {
  
  return (
    <View style={styles.container}>
      {icons.map((icons) => (
        <View style={styles.action}>
          <Image source={icons} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  action: {
    backgroundColor: "#9898981f",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
