import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../utils/colors";
import {
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
} from "expo-image-picker";

function ImagePicker({ size = 100, onSelectedImageChange }) {
  const [localImage, setLocalImage] = useState();
  const [status, requestPermision] = useMediaLibraryPermissions();
  const handleOnClick = async () => {
    if (localImage) {
      Alert.alert("Delete", "Are tou sure you want to delete this image", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => setLocalImage(undefined),
          style: "destructive",
        },
      ]);
    } else {
      await pickImage();
    }
  };
  const pickImage = async () => {
    try {
      const { assets, canceled } = await launchImageLibraryAsync();
      if (canceled) {
      } else {
        setLocalImage(assets[0]);
      }
    } catch (error) {
      alert(error);
    }
  };
  const askImagePermisions = async () => {
    const { granted } = await requestPermision();
    if (!granted) {
      alert("Permisions for camera access need");
    }
  };
  //   Use only onMout, similar to component did mout
  useEffect(() => {
    askImagePermisions();
  }, []);
  // Used on update, similart to component didipdate
  useEffect(() => {
    onSelectedImageChange(localImage);
  }, [localImage]);
  return (
    <TouchableOpacity onPress={handleOnClick}>
      <View
        style={[
          styles.container,
          { width: size, height: size, borderRadius: size * 0.25 },
        ]}
      >
        {localImage ? (
          <Image style={styles.image} source={{ uri: localImage.uri }} />
        ) : (
          <MaterialCommunityIcons name="camera" size={size * 0.5} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

ImagePicker.propTypes = {
  onSelectedImageChange: PropTypes.func.isRequired,
};

export default ImagePicker;
