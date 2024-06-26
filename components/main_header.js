import { StyleSheet, Text, View, Image } from "react-native";
import profile from "../assets/icons/profile.png";
import search from "../assets/icons/search.png";

export default function main_header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image style={styles.profile_pic} source={profile} />
          <View style={styles.profile_text}>
            <Text style={styles.welcome}>Welcome Back</Text>
            <Text style={styles.name}>Eric Atsu</Text>
          </View>
        </View>
        <View style={styles.search}>
          <Image source={search} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_pic: {
    width: 50,
    height: 50,
  },
  profile_text: {
    marginLeft: 13,
    gap: 5,
  },

  welcome: {
    fontSize: 13,
  },

  name: {
    fontSize: 20,
    fontWeight: '500',
  },

  search: {
    backgroundColor: "#9898981f",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 50,
    width: 45,
    height: 45,
  },
});
