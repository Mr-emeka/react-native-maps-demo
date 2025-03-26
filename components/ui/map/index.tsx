import React, { useState } from "react";
import {
  MapViewProps,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";
import { StyleSheet, View , Dimensions} from "react-native";
import MapView from "react-native-maps";
import { MapViewRoute } from "react-native-maps-routes";

const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const Map = ({
  scrollEnabled = true,
  initialRegion,
  height = 151,
  borderRadius = 20,
}: MapViewProps & {
  height?: number;
  borderRadius?: number;
}) => {
  const [mode, setMode] = useState<
    "BICYCLE" | "WALK" | "TWO_WHEELER" | "DRIVE"
  >("WALK");
  console.log(LATITUDE, "LATITUDE");
  console.log(LONGITUDE, "LONGITUDE");
  console.log(LATITUDE_DELTA, "LATITUDE_DELTA");
  console.log(LONGITUDE_DELTA, "LONGITUDE_DELTA");
  console.log(SPACE, "SPACE");
  return (
    <View
      style={[styles.container, { height: height, borderRadius: borderRadius }]}
    >
      <MapView
        style={styles.map}
        scrollEnabled={scrollEnabled}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        customMapStyle={[
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
        ]}
      >
        <MapViewRoute
          origin={{
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          }}
          destination={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
          }}
          strokeColor="hotpink"
          strokeWidth={6}
          onError={(error) => {
            console.log(error, "error map");
          }}
          apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!}
          mode={mode}
        />
        
        <Marker
          coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
          }}
          title="Origin"
          description="Origin"
          image={require("../../../assets/images/flag-pink.png")}
          centerOffset={{x: -42, y: -60}}
          anchor={{x: 0.84, y: 1}}
        />
        <Marker
          coordinate={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
          }}
          title="Destination"
          description="Destination"
          image={require("../../../assets/images/flag-blue.png")}
          centerOffset={{x: -42, y: -60}}
          anchor={{x: 0.84, y: 1}}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
