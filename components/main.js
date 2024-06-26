import { StyleSheet, Text, View, Image } from "react-native";
import Main_header from "./main_header";
import card from '../assets/icons/Card.png'
import Actions from "./actions";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default function main() {
  return (
    <View style={styles.container}>
      <Main_header />
        <Image style={styles.card} source={card}/>
        <Actions />
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
  card: {
    marginTop: 30,
    width: width * 0.9,
    height: width * 0.535,
  },
});
