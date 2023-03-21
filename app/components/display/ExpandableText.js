import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import colors from "../../utils/colors";
import IconText from "./IconText";

const ExpandableText = ({
  threshHold,
  text,
  contentStyle,
  color = colors.primary,
  size = 20,
  title,
}) => {
  const [expanded, setExpanded] = useState(false);
  const displayText = expanded ? text : `${text}`.slice(0, threshHold);
  return (
    <View>
      {title && (
        <Text style={{ fontWeight: "bold", paddingHorizontal: 10 }}>
          {title}
        </Text>
      )}
      <Text style={contentStyle}>{displayText}</Text>
      {text.length > threshHold && (
        <View style={styles.button}>
          <IconText
            left={false}
            icon={expanded ? "chevron-up" : "chevron-down"}
            size={15}
            text={expanded ? "Less" : "More"}
            onPress={() => setExpanded(!expanded)}
          />
        </View>
      )}
    </View>
  );
};

export default ExpandableText;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
  },
});
