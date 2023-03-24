import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useProperty } from "../../api/hooks";
import { FlatList } from "react-native";
import colors from "../../utils/colors";
import RatingBar from "../../components/ratingbar/RatingBar";
import moment from "moment/moment";

const ReviewsScreen = ({ navigation, route }) => {
  const item = route.params;
  const [reviews, setReviews] = useState([]);
  const { getPropertyReviews } = useProperty();
  const [refresh, setRefresh] = useState(false);

  const handleFetch = async () => {
    const reviewsResponse = await getPropertyReviews({ property: item.title });
    if (!reviewsResponse.ok) return console.log(reviewsResponse.problem);
    const {
      data: { results: reviewResults },
    } = reviewsResponse;
    setReviews(reviewResults);
  };
  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <View style={styles.screen}>
      <FlatList
        data={reviews}
        keyExtractor={({ url }) => url}
        refreshing={refresh}
        onRefresh={handleFetch}
        renderItem={({ item: review }) => (
          <View style={[styles.card]}>
            <View style={styles.user}>
              <Image
                source={{ uri: review.user.image }}
                style={styles.avatar}
              />
              <Text style={{ padding: 10, fontWeight: "bold" }}>
                {review.user.name}
              </Text>
            </View>
            <View style={styles.rating}>
              <RatingBar
                align="flex-start"
                starSize={10}
                disabled
                contentStyle={{ paddingRight: 10 }}
                defaultRating={parseInt(review.rating)}
              />
              <Text>{moment(review.created).format("Do MMM YYYY")}</Text>
            </View>
            <Text style={{ paddingBottom: 10 }}>{review.comment}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ReviewsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
