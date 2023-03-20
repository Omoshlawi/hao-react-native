import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import AppText from "../../components/AppText";
import colors from "../../utils/colors";
import ListItem from "../../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import routes from "../../navigation/routes";
import AppIcon from "../../components/AppIcon";
import IconText from "../../components/display/IconText";

function PropertyDetailScreen({ navigation, route }) {
  item = route.params;
  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri: item.image }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              color={colors.white}
              size={50}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{item.title}</Text>
          <View
            style={{
              backgroundColor: colors.black,
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <IconText
              icon="star-outline"
              size={20}
              color={colors.white}
              text={`${item.reviews.average_rating}`}
            />
          </View>
        </View>
        <View>
          <View style={styles.filters}>
            <Text style={styles.filtersText}>
              {item.type.type}
              {" | "}
            </Text>
            <Text style={styles.filtersText}>{item.status.status}</Text>
          </View>
          {item.images && (
            <View style={styles.thumbnailsContainer}>
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
                    <Image
                      source={{ uri: item.image }}
                      style={styles.thumbnail}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.image}
              />
            </View>
          )}
        </View>
      </ImageBackground>
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
    height: 500,
    justifyContent: "space-between",
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
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
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
  filters: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.dark,
  },
  filtersText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});

PropertyDetailScreen.propTypes = {};

export default PropertyDetailScreen;
