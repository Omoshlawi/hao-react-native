import { StyleSheet, Text, View, Image, ImageComponent } from "react-native";
import React, { useContext, useState } from "react";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../../components/forms";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
import colors from "../../utils/colors";
import { useUser } from "../../api/hooks";
import UserContext from "../../context/UserContext";
import AppIcon from "../../components/AppIcon";
import ListItem from "../../components/ListItem";

const UserProfileScreen = ({ navigation, route }) => {
  const {
    username,
    first_name,
    last_name,
    email,
    profile: { image, gender, phone_number },
  } = route.params;

  const [edit, setEdit] = useState(false);
  return (
    <View style>
      <>
        <View style={styles.card}>
          {image && <Image style={styles.image} source={{ uri: image }} />}
          {!image && (
            <View style={styles.icon}>
              <AppIcon
                name="account"
                color={colors.white}
                backgroundColor={colors.primary}
                size={120}
              />
            </View>
          )}
          <View>
            <ListItem
              title={username}
              IconComponent={<AppIcon name="account-outline" />}
            />
            <ListItem
              title={`${first_name} ${last_name}`}
              IconComponent={<AppIcon name="account-edit-outline" />}
            />
            <ListItem
              title={email}
              IconComponent={<AppIcon name="email-outline" />}
            />
            <ListItem
              title={phone_number}
              IconComponent={<AppIcon name="phone" />}
            />
            <ListItem
              title={gender}
              IconComponent={<AppIcon name="human-edit" />}
            />
          </View>
        </View>
      </>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
  },
  card: {
    padding: 20,
  },
});
