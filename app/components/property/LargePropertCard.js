import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import IconText from "../display/IconText";
import colors from "../../utils/colors";
import AppIcon from "../AppIcon";
import { useNavigation } from "@react-navigation/native";
import routes from "../../navigation/routes";

const LargePropertCard = ({ item }) => {
  const navigation  = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(routes.PROPERTY_DETAIL_PROP, item)}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.like}>
          <AppIcon name="cards-heart" />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: item.image }} />
        <IconText text={item.title} color={colors.black} size={30} />
        <IconText
          icon="google-maps"
          text={`${item.location.address} ${item.location.city} ${item.location.country}`}
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
        </View>
        <View style={styles.row}>
          <IconText
            icon="star-outline"
            text={3.5}
            fontWeight="bold"
            color={colors.medium}
          />
          <IconText
            icon="cards-heart-outline"
            color={colors.medium}
            text={item.status.status}
            fontWeight="bold"
          />
          <IconText
            icon="chat-outline"
            text="10k"
            fontWeight="bold"
            color={colors.medium}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LargePropertCard;

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
