import React from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import AppText from "../../components/AppText";
import colors from "../../utils/colors";
import ListItem from "../../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import routes from "../../navigation/routes";

function PropertyDetailScreen({ navigation, route }) {
  item = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.header}>
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
        <Text style={styles.headerTitle}>{item.title}</Text>
      </View>
      {item.images && (
        <View style={styles.thumbnailsContainer}>
          <Text style={{ fontWeight: "bold" }}>{item.title} Images</Text>
          <FlatList
            data={item.images}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(routes.IMAGE_VIEW, {
                    image: { uri: item.image },
                  });
                }}
              >
                <Image source={{ uri: item.image }} style={styles.thumbnail} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.image}
          />
        </View>
      )}
      <View style={styles.detailsContainer}>
        <AppText style={styles.price}>Ksh.{item.price}</AppText>
        <AppText>{item.description}</AppText>
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
    backgroundColor: colors.black,
    borderRadius: 10,
  },
  header: {
    top: 5,
    marginLeft: 10,
    marginTop: 30,
    position: "absolute",
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 30,
    verticalAlign: "middle",
    marginHorizontal: 20,
    fontWeight: "bold",
    color: colors.white,
    // backgroundColor: colors.dark,
    flex: 1,
    // borderRadius: 10,
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
