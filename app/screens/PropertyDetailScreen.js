import React from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../utils/colors";
import ListItem from "../components/ListItem";

function PropertyDetailScreen({ navigation, route }) {
  item = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>${item.price}</AppText>
        <AppText>{item.description}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/logo-black.png")}
            title="Laurent Ouma"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
  },
});

PropertyDetailScreen.propTypes = {};

export default PropertyDetailScreen;
