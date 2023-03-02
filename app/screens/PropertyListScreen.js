import React from "react";
import PropTypes from "prop-types";
import { FlatList, SafeAreaView } from "react-native";
import { View, StyleSheet } from "react-native";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import AppCard from "../components/AppCard";
import colors from "../utils/colors";

const properties = [
  {
    url: "http://127.0.0.1:8000/properties/joy-imani/",
    title: "Joy Imani",
    description:
      "This impressive paella is a perfect party dish and a fun meal to\r\n              cook together with your guests. Add 1 cup of frozen peas along\r\n              with the mussels, if you like.",
    type: "http://127.0.0.1:8000/properties/types/shops/",
    status: "http://127.0.0.1:8000/properties/status/on-hire/",
    price: "0.00",
    area: "23",
    slug: "joy-imani",
    image:
      "http://127.0.0.1:8000/media/uploads/properties/property_image/Joy_Imani_1.jpg",
    is_approved: false,
    houses: [
      "http://127.0.0.1:8000/houses/001/",
      "http://127.0.0.1:8000/houses/002/",
    ],
    created: "2023-02-19T04:49:28.840192Z",
    location: "http://127.0.0.1:8000/properties/location/1/",
  },
  {
    url: "http://127.0.0.1:8000/properties/kwetu/",
    title: "Kwetu",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    type: "http://127.0.0.1:8000/properties/types/plot/",
    status: "http://127.0.0.1:8000/properties/status/on-rent/",
    price: "0.00",
    area: "23",
    slug: "kwetu",
    image:
      "http://127.0.0.1:8000/media/uploads/properties/property_image/Kwetu_2.jpeg",
    is_approved: false,
    houses: [],
    created: "2023-02-19T04:49:28.840192Z",
    location: "http://127.0.0.1:8000/properties/location/2/",
  },
  {
    url: "http://127.0.0.1:8000/properties/laurent-ouma/",
    title: "Laurent Ouma",
    description:
      "Where can I get some?\r\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    type: "http://127.0.0.1:8000/properties/types/land/",
    status: "http://127.0.0.1:8000/properties/status/on-rent/",
    price: "0.00",
    area: "23",
    slug: "laurent-ouma",
    image:
      "http://127.0.0.1:8000/media/uploads/properties/property_image/Laurent_Ouma_3.jpeg",
    is_approved: false,
    houses: [],
    created: "2023-02-19T04:49:28.840192Z",
    location: "http://127.0.0.1:8000/properties/location/3/",
  },
  {
    url: "http://127.0.0.1:8000/properties/jeff-odhiambo/",
    title: "Jeff Odhiambo",
    description: "",
    type: "http://127.0.0.1:8000/properties/types/officess/",
    status: "http://127.0.0.1:8000/properties/status/on-rent/",
    price: "0.00",
    area: "23",
    slug: "jeff-odhiambo",
    image: null,
    is_approved: false,
    houses: [],
    created: "2023-02-19T04:49:28.840192Z",
    location: "http://127.0.0.1:8000/properties/location/4/",
  },
  {
    url: "http://127.0.0.1:8000/properties/george-ojunga/",
    title: "George Ojunga",
    description: "",
    type: "http://127.0.0.1:8000/properties/types/plot/",
    status: "http://127.0.0.1:8000/properties/status/on-rent/",
    price: "0.00",
    area: "23.00",
    slug: "george-ojunga",
    image: null,
    is_approved: false,
    houses: [],
    created: "2023-02-26T07:44:49.879072Z",
    location: "http://127.0.0.1:8000/properties/location/5/",
  },
  {
    url: "http://127.0.0.1:8000/properties/gloria-nyambura/",
    title: "Gloria Nyambura",
    description:
      '"users_url": "http://127.0.0.1:8000/users/",\r\n    "current_user_url": "http://127.0.0.1:8000/users/:id/",\r\n    "properties_url": "http://127.0.0.1:8000/properties/",\r\n    "property_types_url": "http://127.0.0.1:8000/properties/types/",\r\n    "current_property_types_url": "http://127.0.0.1:8000/properties/types/:slug/",\r\n    "property_status_url": "http://127.0.0.1:8000/properties/status/",\r\n    "current_property_status_url": "http://127.0.0.1:8000/properties/status/:slug/",\r\n    "houses_url": "http://127.0.0.1:8000/houses/",\r\n    "current_houses_url": "http://127.0.0.1:8000/houses/:slug/",\r\n    "houses_types_url": "http://127.0.0.1:8000/houses/types/",\r\n    "current_houses_types_url": "http://127.0.0.1:8000/houses/types/:slug/",\r\n    "houses_status_url": "http://127.0.0.1:8000/houses/status/",\r\n    "current_houses_status_url": "http://127.0.0.1:8000/houses/status/:slug/"',
    type: "http://127.0.0.1:8000/properties/types/plot/",
    status: "http://127.0.0.1:8000/properties/status/on-rent/",
    price: "0.00",
    area: "23.00",
    slug: "gloria-nyambura",
    image:
      "http://127.0.0.1:8000/media/uploads/properties/property_image/Gloria_Nyambura_None.JPG",
    is_approved: false,
    houses: [],
    created: "2023-02-26T09:17:29.472447Z",
    location: "http://127.0.0.1:8000/properties/location/6/",
  },
];

function PropertyListScreen(props) {
  return (
    <AppSafeAreaScreen style={styles.screen}>
      <FlatList
        data={properties}
        keyExtractor={(property) => property.url}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <AppCard
              image={require("../assets/logo-red.png")}
              title={item.title}
              subTitle={item.price}
            />
          </View>
        )}
      />
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  list: {
    paddingHorizontal: 20,
  },
});

PropertyListScreen.propTypes = {};

export default PropertyListScreen;
