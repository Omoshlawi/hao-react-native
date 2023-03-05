import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import colors from "../utils/colors";
import AppIcon from "./AppIcon";

const HouseCard = ({ onPress, image, title, subTitle, price }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>Ksh.{price}</Text>
            <TouchableOpacity>
              <AppIcon name="heart" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HouseCard;

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height:150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
  },
  price: {
    fontSize: 18,
    textAlignVertical: "center",
    color: colors.secondary,
    fontWeight: "bold",
    flex: 1,
  },
  priceContainer: {
    flexDirection: "row",
  },
});
