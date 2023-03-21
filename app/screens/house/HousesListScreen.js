import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useHouses } from "../../api/hooks";
import colors from "../../utils/colors";
import LargeHouseCard from "../../components/house/LargeHouseCard";

const HousesListScreen = () => {
  const [houses, sethouses] = useState([]);
  const [error, setError] = useState(false);
  const { getAllHouses } = useHouses();
  const [refresh, setRefresh] = useState(false);

  const loadProps = async () => {
    setRefresh(true);
    const response = await getAllHouses();
    setRefresh(false);
    if (!response.ok) return setError(true);
    const { data } = response;
    sethouses(data.results);
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
            Coulnt retrive houses from server, pull to referesh
          </Text>
        </>
      )}
      <FlatList
        data={houses}
        keyExtractor={(property) => property.url}
        refreshing={refresh}
        contentContainerStyle={styles.listContainer}
        onRefresh={loadProps}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <LargeHouseCard item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default HousesListScreen;

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
