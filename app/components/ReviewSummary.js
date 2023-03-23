import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RatingBar from "./ratingbar/RatingBar";
import colors from "../utils/colors";
import IconText from "./display/IconText";

const ReviewSummary = ({ rating, reviews }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <RatingBar
            defaultRating={parseInt(rating)}
            minRating={1}
            maxRating={5}
            disabled
          />
          <IconText
            size={15}
            text={`${reviews} Reviews`}
            color={colors.medium}
          />
        </View>
        <IconText
          icon={parseInt(reviews) > 0 ? "dots-horizontal" : "plus"}
          size={15}
          text={parseInt(reviews) > 0 ? "View More" : "Leave Review"}
        />
      </View>
    </View>
  );
};

export default ReviewSummary;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    padding: 5,
  },
});
