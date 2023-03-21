import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import AppIcon from "../AppIcon";
import IconText from "../display/IconText";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import routes from "../../navigation/routes";

const LargeHouseCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.HOUSES_NAV, {
          screen: routes.HOUSE_DETAIL_SCREEN,
          params: item,
        })
      }
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.like}>
          <AppIcon name="cards-heart" />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: item.image }} />
        <IconText
          text={item.house_number}
          color={colors.black}
          size={30}
          icon="home"
        />
        <IconText
          icon="home-modern"
          text={item.property.title}
          color={colors.black}
          size={18}
        />
        <View style={styles.row}>
          <IconText
            icon="currency-usd"
            text={item.price}
            fontWeight="bold"
            color={colors.medium}
          />
          <IconText
            icon="progress-check"
            color={colors.medium}
            text={item.status.status}
            fontWeight="bold"
          />
          <IconText
            icon="bed-single-outline"
            text={item.type.type}
            fontWeight="bold"
            color={colors.medium}
          />
          <IconText
            icon="cards-heart-outline"
            color={colors.medium}
            text={item.status.status}
            fontWeight="bold"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LargeHouseCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  container: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.white,
    paddingBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  like: { position: "absolute", top: 10, zIndex: 1, right: 10 },
});
