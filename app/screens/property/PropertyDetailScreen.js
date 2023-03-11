import React from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import AppText from "../../components/AppText";
import colors from "../../utils/colors";
import ListItem from "../../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";

function PropertyDetailScreen({ navigation, route }) {
  item = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.image }} />
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.pop();
        }}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          color={colors.white}
          size={50}
        />
      </TouchableOpacity>
      {item.images && (
        <View style={styles.thumbnailsContainer}>
          <Text>Images</Text>
          <FlatList
            data={item.images}
            horizontal
            renderItem={({ item }) => (
              <Image source={{ uri: item.image }} style={styles.thumbnail} />
            )}
            keyExtractor={(item) => item.image}
          />
        </View>
      )}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>${item.price}</AppText>
        <AppText>{item.description}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/logo-black.png")}
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
    height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    bottom: 100,
  },
  back: {
    position: "absolute",
    top: 5,
    marginLeft: 10,
    marginTop: 30,
    backgroundColor: colors.black,
    borderRadius: 10,
  },
  thumbnailsContainer: {
    padding: 10,
  },
  thumbnail: {
    height: 80,
    margin: 5,
    width: 80,
    borderRadius: 10,
  },
});

PropertyDetailScreen.propTypes = {};

export default PropertyDetailScreen;
