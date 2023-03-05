import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, FlatList, SafeAreaView } from "react-native";
import { View, StyleSheet } from "react-native";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import AppCard from "../components/AppCard";
import colors from "../utils/colors";
import { useProperty } from "../api/hooks";
import AppText from "../components/AppText";
import routes from "../navigation/routes";
import HouseCard from "../components/HouseCard";

function PropertyListScreen({ navigation }) {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const { getProperties } = useProperty();
  const [refresh, setRefresh] = useState(false);

  const loadProps = async () => {
    setRefresh(true);
    const response = await getProperties();
    setRefresh(false);
    if (!response.ok) return setError(true);
    const { data } = response;
    setProperties(data.results);
    setError(false);
  };

  useEffect(() => {
    loadProps();
  }, []);
  return (
    <View style={styles.screen}>
      {error && (
        <>
          <AppText>
            Coulnt retrive properties from server, pull to referesh
          </AppText>
        </>
      )}
      <FlatList
        data={properties}
        keyExtractor={(property) => property.url}
        refreshing={refresh}
        onRefresh={loadProps}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <HouseCard
              image={{ uri: item.image }}
              title={item.title}
              subTitle={item.price}
              price={item.price}
              onPress={() => {
                navigation.navigate(routes.PROPERTY_DETAIL_PROP, item);
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingTop: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
});

PropertyListScreen.propTypes = {};

export default PropertyListScreen;
