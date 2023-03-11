import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useProperty } from "../../api/hooks";
import colors from "../../utils/colors";
import HouseCard from "../../components/HouseCard";
import UserContext from "../../context/UserContext";
import routes from "../../navigation/routes";

const UserPropertyScreen = ({ navigation }) => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const { getUserProperties } = useProperty();
  const [refresh, setRefresh] = useState(false);
  const { token } = useContext(UserContext);

  const loadProps = async () => {
    setRefresh(true);
    const response = await getUserProperties(token);
    setRefresh(false);
    if (!response.ok) {
      console.log(response.data);
      return setError(true);
    }
    const { data } = response;
    setProperties(data);
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
        onRefresh={loadProps}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <HouseCard
              image={{ uri: item.image }}
              title={item.title}
              subTitle={item.description.slice(0, 197)}
              price={item.price}
              //   imgHeight={100}
              //   imgWidth={100}
              onPress={() => {
                navigation.navigate(routes.PROPERTY_DETAIL_PROP, item);
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default UserPropertyScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    paddingTop: 10,
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
  },
  error: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
