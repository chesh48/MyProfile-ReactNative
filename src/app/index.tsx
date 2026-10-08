import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [points, setPoints] = useState(0);

  const name = "Diluka";
  const email = "diluka.w@nsbm.ac.lk";

  const handleAdd = () => {
    setPoints((previous) => previous + 1);
    Alert.alert("Success", "You earned 1 point!");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/300?img=12",
          }}
          style={styles.avatar}
        />
        <Ionicons
          name="checkmark"
          size={34}
          color="#00E600"
          style={styles.checkmark}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.details}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{name}</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={17} color="#000" />
          <Text style={styles.rowText}>{email}</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={18} color="#000" />
          <Text style={styles.rowText}>{points}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Ionicons name="add" size={25} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    height: 55,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 16,
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  checkmark: {
    position: "absolute",
    right: 8,
    bottom: 8,
  },
  divider: {
    height: 1.5,
    backgroundColor: "#222",
    marginHorizontal: 18,
    marginTop: 10,
    marginBottom: 15,
  },
  details: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 7,
  },
  value: {
    fontSize: 15,
    color: "#222",
    marginBottom: 22,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    gap: 10,
  },
  rowText: {
    fontSize: 15,
    color: "#222",
  },
  addButton: {
    position: "absolute",
    right: 15,
    bottom: 25,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
