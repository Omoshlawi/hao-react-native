import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image
} from "react-native";
import React from "react";
import colors from "../../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconText from "../../components/display/IconText";
import ExpandableText from "../../components/display/ExpandableText";
import routes from "../../navigation/routes";

const HouseDetailsScreen = ({ navigation, route }) => {
  item = route.params;
  return (
    <View style={styles.screen}>
      <ScrollView>
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
            <Text
              style={styles.headerTitle}
            >{`${item.property.title} ${item.house_number}`}</Text>
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
                // text={`${item.reviews.average_rating}`}
              />
            </View>
          </View>
          <View>
            <View style={styles.filters}>
              <IconText
                icon="bed-single-outline"
                text={`${item.type.type} | `}
                size={20}
                color={colors.white}
              />
              <IconText
                icon="progress-check"
                text={`${item.status.status} | `}
                size={20}
                color={colors.white}
              />
              <IconText
                icon="home-modern"
                text={item.property.title}
                // text={`${item.location.address} ${item.location.city} ${item.location.country}`}
                size={15}
              />
            </View>
            {item.images && (
              <View style={styles.thumbnailsContainer}>
                <FlatList
                  data={item.images}
                  horizontal
                  renderItem={({ item: { image } }) => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(routes.IMAGE_VIEW, {
                          image: { uri: image },
                        });
                      }}
                    >
                      <Image source={{ uri: image }} style={styles.thumbnail} />
                    </TouchableOpacity>
                  )}
                  keyExtractor={({ image }) => image}
                />
              </View>
            )}
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          {/* {item.features.length > 0 && (
            <ScrollableBadgeButtons
              data={item.features}
              labelExtractor={({ feature }) => feature}
              selectable={false}
              title="Features"
            />
          )} */}
          <ExpandableText
            title="Description"
            contentStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
            text={item.description}
            threshHold={350}
          />
          <View>
            <Text style={{ fontWeight: "bold", paddingHorizontal: 10 }}>
              House Details
            </Text>
            <View style={styles.textRow}>
              <Text>Number: </Text>
              <Text style={styles.detailText}>{item.house_number}</Text>
            </View>
            <View style={styles.textRow}>
              <Text>Property: </Text>
              <Text style={styles.detailText}>{item.property.title}</Text>
            </View>
            <View style={styles.textRow}>
              <Text>Price: </Text>
              <Text style={styles.detailText}>{item.price}</Text>
            </View>
            
            <View style={styles.textRow}>
              <Text>Type: </Text>
              <Text style={styles.detailText}>{item.type.type}</Text>
            </View>
            <View style={styles.textRow}>
              <Text>Status: </Text>
              <Text style={styles.detailText}>{item.status.status}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.row}>
        <IconText text={`Ksh.${item.price}`} size={30} />
        <TouchableOpacity>
          <Text style={styles.btnText}>Check availability</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HouseDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    justifyContent: "space-between",
  },
  detailsContainer: {
    padding: 10,
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
    fontSize: 25,
    verticalAlign: "middle",
    marginHorizontal: 20,
    fontWeight: "bold",
    color: colors.white,
    flex: 1,
  },
  thumbnailsContainer: {
    padding: 10,
  },
  thumbnail: {
    height: 80,
    margin: 5,
    width: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.white,
  },
  filters: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.dark,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    backgroundColor: colors.primary,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  textRow: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  detailText: {
    fontWeight: "bold",
  },
});
