import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";

const MainText = ({ children, color, size, fontWeight, bold, style }) => {
  const lang = useSelector((state) => {
    return state.settingReducer.lang;
  });

  const [fontsLoaded] = useFonts({
    "Segoe-UI": require("../resources/assets/fonts/Segoe-UI.ttf"),
    "Segoe-UI-Bold": require("../resources/assets/fonts/Segoe-UI-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={[
        {
          color: color,
          fontFamily: bold ? "Segoe-UI-Bold" : "Segoe-UI",
          fontSize: size,
          fontWeight,
          lineHeight: size ? size + 4 : 16,
          textAlign: lang === "ar" ? "right" : "left",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default MainText;
