import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({ localImagesList = [], onImagesListChange }) => {
  return (
    <View style={styles.container}>
      {localImagesList.map((localImage, index) => (
        <View style={styles.item} key={index}>
          <ImageInput
            radiusScaleFactor={0.25}
            localImage={localImage}
            onImageChange={(image) => {
              if (image) {
                // add an image
                onImagesListChange([...localImagesList, image]);
              } else {
                // delete this image
                onImagesListChange(
                  localImagesList.filter((img) => img.uri !== localImage.uri)
                );
              }
            }}
          />
        </View>
      ))}
      <View style={styles.item}>
        <ImageInput
          onImageChange={(image) =>
            onImagesListChange([...localImagesList, image])
          }
        />
      </View>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    margin: 10,
  },
});
