import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const MainText = ({ children, color, size, fontWeight, bold }) => {
  const [fontsLoaded] = useFonts({
    "Segoe-UI": require("../resources/assets/fonts/Segoe-UI.ttf"),
    "Segoe-UI-Bold": require("../resources/assets/fonts/Segoe-UI-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        color: color,
        fontFamily: bold ? "Segoe-UI-Bold" : "Segoe-UI",
        fontSize: size,
        fontWeight,
      }}
    >
      {children}
    </Text>
  );
};

export default MainText;
