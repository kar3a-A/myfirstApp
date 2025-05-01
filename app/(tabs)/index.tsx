
import { Link } from "expo-router";
import { Text, View, StyleSheet  } from "react-native";

export default function Index() {
  return (
    <View
      style= { styles.container }
    >
      <Link href={"/about"} style={styles.button}>About</Link>

      <Text style={styles.text}>Main screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
    
  },
  text: {
    color: "white"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  },
  
})
