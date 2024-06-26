import { StyleSheet, Text, View, Image } from "react-native";

const icons = [
  { icon: require("../assets/icons/send.png"), text: "Sent" },
  { icon: require("../assets/icons/recieve.png"), text: "Recieved" },
  { icon: require("../assets/icons/loan.png"), text: "loan" },
  { icon: require("../assets/icons/topUp.png"), text: "TopUp" },
];

export default function actions() {
  return (
    <View style={styles.container}>
      {icons.map((icons) => (
        <View style={styles.container1}>
          <View style={styles.action}>
            <Image source={icons.icon} />
          </View>
          <Text style={styles.icon_text}>{icons.text}</Text>
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
  container1: {
    alignItems: "center",
    justifyContent: "center"
  }, 
  action: {
    backgroundColor: "#9898981f",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  icon_text: {
    marginTop: 5,
    fontSize: 15,
  },
});
