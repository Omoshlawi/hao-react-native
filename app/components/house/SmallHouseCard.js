import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import IconText from "../display/IconText";
import colors from "../../utils/colors";
import routes from "../../navigation/routes";

import { useNavigation } from "@react-navigation/native";

const SmallHouseCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.HOUSES_NAV, {
            screen: routes.HOUSE_DETAIL_SCREEN,
            params: item,
          });
        }}
      >
        <Image
          style={{ width: 200, height: 100, borderRadius: 10 }}
          source={{ uri: item.image }}
        />
        <View>
          <IconText
            text={item.house_number}
            icon="home"
            size={15}
            fontWeight="bold"
          />
          <IconText
            text={item.property.title}
            icon="home-modern"
            color={colors.medium}
            size={15}
            fontWeight="bold"
          />
          <IconText
            text={"Ksh. " + item.price}
            icon="currency-usd"
            color={colors.black}
            size={15}
            fontWeight="bold"
          />
          <View style={styles.row}>
            <IconText
              text={item.type.type}
              color={colors.medium}
              icon="bed-single-outline"
            />
            <IconText
              text={item.status.status}
              color={colors.medium}
              icon="progress-check"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SmallHouseCard;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: colors.white,
    paddingBottom: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
