import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const headers = {
  "x-client-id": "651e5a8612e5356e23ce5a57",
  "x-app-id": "651e5a8612e5356e23ce5a59",
};

const client = new ApolloClient({
  url: "https://api.chargetrip.io/graphql",
  fetchOptions: {
    headers,
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
/**
 * You can access a list of all available vehicles using the `vehicleList` query.
 * In this example we use our playground, which has only 12 vehicles available.
 * Chargetrip operates an extensive database of EV makes, editions, and versions,
 * each with their specific consumption models.
 * You need a registered x-client-id to access the full vehicle database.
 * You can obtain a registered x-client-id on https://account.chargetrip.com/
 * **/
