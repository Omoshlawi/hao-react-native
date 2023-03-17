import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import IconText from "../display/IconText";
import { useNavigation } from "@react-navigation/native";
import routes from "../../navigation/routes";

const SmallPropertyCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.PROPERTY_DETAIL_PROP, item);
        }}
      >
        <Image
          style={{ width: 200, height: 100, borderRadius: 10 }}
          source={{ uri: item.image }}
        />
        <View>
          <IconText
            text={item.title}
            icon="home-modern"
            size={15}
            fontWeight="bold"
          />
          <IconText
            text={"Ksh. " + item.price}
            icon="currency-usd"
            color={colors.medium}
            size={15}
            fontWeight="bold"
          />
          <View style={styles.row}>
            <IconText icon="star-outline" text={4.5} color={colors.medium} />
            <IconText icon="cards-heart-outline" text="1000" color={colors.medium} />
          </View>
          <View style={styles.row}>
            <IconText
              text={item.type.type}
              color={colors.medium}
              icon="format-list-bulleted-type"
            />
            <IconText
              text={item.status.status}
              color={colors.medium}
              icon="checkbook"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SmallPropertyCard;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColorL: colors.primary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
