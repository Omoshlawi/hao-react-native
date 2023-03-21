import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, FlatList, Text } from "react-native";
import colors from "../../utils/colors";
import { useProperty } from "../../api/hooks";
import LargePropertCard from "../../components/property/LargePropertCard";

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
          <Text style={styles.error}>
            Coulnt retrive properties from server, pull to referesh
          </Text>
        </>
      )}
      <FlatList
        data={properties}
        keyExtractor={(property) => property.url}
        refreshing={refresh}
        contentContainerStyle={styles.listContainer}
        onRefresh={loadProps}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <LargePropertCard item={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    paddingTop: 10,
    flex: 1,
  },
  listContainer: {
    padding: 5,
  },
  error: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  listItem: {
    margin: 5,
  },
});

PropertyListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default PropertyListScreen;
