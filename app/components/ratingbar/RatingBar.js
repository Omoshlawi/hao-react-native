import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { rangeToListInclusive } from "../../utils/helpers";

const RatingBar = ({
  defaultRating = 1,
  maxRating = 5,
  minRating = 1,
  onRatingChange,
  disabled,
  startSize = 30,
}) => {
  const [currentRating, setcurrentRating] = useState(
    defaultRating >= minRating && defaultRating <= maxRating ? defaultRating : 0
  );
  const ratings = rangeToListInclusive(minRating, maxRating);

  const starImageFilled = require("./asset/star_filled.png");
  // Empty Star. You can also give the path from local
  const starImageCorner = require("./asset/star_corner.png");

  return (
    <View style={styles.customRatingBarStyle}>
      {ratings.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={key}
            onPress={() => {
              setcurrentRating(item);
              if (onRatingChange instanceof Function) onRatingChange(item);
            }}
            disabled={disabled}
          >
            <Image
              style={[
                styles.starImageStyle,
                { width: startSize, height: startSize },
              ]}
              source={item <= currentRating ? starImageFilled : starImageCorner}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RatingBar;

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
  },
  starImageStyle: {
    resizeMode: "cover",
  },
});
