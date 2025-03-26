import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

import Map from "@/components/ui/map";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Google Maps Route API vs. Directions API: What You Need to Know in 2025</Text>
        <TouchableOpacity
          style={styles.mapContainer}
          onPress={() => router.push("/explore")}
        >
          <Map scrollEnabled={false} />
        </TouchableOpacity>


        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No Data</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  mapContainer: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "brown",
  },
  noDataContainer: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  noDataText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
