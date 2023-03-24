import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useProperty } from "../../api/hooks";
import { FlatList } from "react-native";
import colors from "../../utils/colors";
import RatingBar from "../../components/ratingbar/RatingBar";
import moment from "moment/moment";
import AppTextInput from "../../components/AppTextInput";
import { TouchableOpacity } from "react-native";
import AppIcon from "../../components/AppIcon";
import UserContext from "../../context/UserContext";
import { Button, Snackbar } from "react-native-paper";

const ReviewsScreen = ({ navigation, route }) => {
  const item = route.params;
  const [reviews, setReviews] = useState([]);
  const { getPropertyReviews, postPropertyReview } = useProperty();
  const [refresh, setRefresh] = useState(false);
  const [formState, setFormState] = useState({ comment: "", rating: 3 });
  const { token } = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  const handleFetch = async () => {
    const reviewsResponse = await getPropertyReviews({
      property: item.title,
      ordering: "-created",
    });
    if (!reviewsResponse.ok) return console.log(reviewsResponse.problem);
    const {
      data: { results: reviewResults },
    } = reviewsResponse;
    setReviews(reviewResults);
  };

  const handleSubmit = async () => {
    setVisible(false);
    const response = await postPropertyReview(
      { ...formState, property: item.url },
      token
    );
    if (!response.ok) {
      return console.log("ReviewScreen: ", response.problem, response.data);
    }
    setVisible(true);
    await handleFetch();
    setFormState({ comment: "", rating: 3 });
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
      <View style={styles.form}>
        <Text style={styles.label}>Rating:</Text>
        <RatingBar
          align="flex-start"
          defaultRating={formState.rating}
          onRatingChange={(rating) => setFormState({ ...formState, rating })}
        />
        <Text style={styles.label}>Review:</Text>
        <View style={styles.input}>
          <AppTextInput
            placeholder="Leave your review here"
            width="85%"
            onChangeText={(comment) => setFormState({ ...formState, comment })}
            value={formState.comment}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <AppIcon
              name="send"
              size={50}
              color={colors.white}
              backgroundColor={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={5000}
        action={{
          label: "Dismiss",
          onPress: () => {
            // setVisible(false);
          },
        }}
      >
        Review added successfully.Thank you!.
      </Snackbar>
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
  form: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: colors.medium,
    fontWeight: "bold",
    padding: 5,
  },
});
