import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconText from "../display/IconText";
import colors from "../../utils/colors";
import routes from "../../navigation/routes";

const SmallHouseCard = ({ item }) => {
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 10,
            }}
          >
            <IconText icon="star-outline" text={4.5} />
            <IconText icon="cards-heart-outline" text="1000" />
          </View>
          <IconText text={item.type.type} color={colors.medium} />
          <IconText text={item.status.status} color={colors.medium} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SmallHouseCard;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColorL: colors.primary,
  },
});
