import React, { useEffect, useState } from "react";
import { Image, Platform, Share, StyleSheet, TouchableOpacity, View, I18nManager } from "react-native";
import MainText from "../components/MainText";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Header from "../components/Header";
import R from "../resources/R";
import { ArrowDownIcon } from "../resources/assets/SVGs";
import * as Updates from "expo-updates";
import { strings } from "../localization";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../store/actions/settingsAction";

const dropDownItems = [
  {
    lang: "en",
    text: "English",
  },
  {
    lang: "ar",
    text: "Arabic",
  },
];
const ProfileScreen = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedLang, setSelectedLang] = useState(dropDownItems[0]);

  const lang = useSelector((state) => {
    return state.settingReducer.lang;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedLang.lang === "ar") {
      dispatch(setLang("ar"));
      if (!I18nManager.isRTL) {
        // I18nManager.forceRTL(true);
        // I18nManager.allowRTL(true);
      }
    } else {
      dispatch(setLang("en"));
      if (I18nManager.isRTL) {
        // I18nManager.forceRTL(false);
        // I18nManager.allowRTL(false);
      }
    }
  }, [selectedLang]);

  const handleShare = async (textToShare) => {
    try {
      await Share.share({
        message: textToShare,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };
  return (
    <BackgroundWrapper top="-62%" showArrows={false}>
      <Header showLogo={false} title={strings[lang].all.Profile} showSearch={false} />

      <View
        style={[styles.profileAndNameContainer, { marginTop: Platform.OS === "ios" ? 70 : 90, flexDirection: lang === "en" ? "row" : "row-reverse" }]}
      >
        <Image source={R.images.profileTemp} />
        <MainText size={21}>Mohammed Adel</MainText>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 30,
        }}
        onPress={() => {
          handleShare("ay 7aga");
        }}
      >
        <MainText size={18}>{strings[lang].all.ShareTheApp}</MainText>
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          marginTop: 20,
          flexDirection: lang === "en" ? "row" : "row-reverse",
          justifyContent: "space-between",
        }}
      >
        <MainText size={18}>{strings[lang].all.ChangeLanguage}</MainText>

        <TouchableOpacity
          style={{
            flexDirection: lang === "en" ? "row" : "row-reverse",
            justifyContent: "space-between",
            gap: 10,
            alignItems: "center",
          }}
          onPress={() => {
            setOpenDropDown((prev) => !prev);
          }}
        >
          <MainText size={18} bold={true}>
            {selectedLang.text}
          </MainText>

          <ArrowDownIcon />
        </TouchableOpacity>
      </View>
      {openDropDown && (
        <View style={styles.dropDownList}>
          {dropDownItems.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedLang(item);
                  setOpenDropDown((prev) => !prev);
                }}
                key={item.lang}
                style={{
                  height: 40,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottomWidth: index !== dropDownItems.length - 1 ? 1 : 0,
                }}
              >
                <MainText>{item.text}</MainText>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  profileAndNameContainer: {
    width: "100%",

    gap: 40,
  },
  dropDownList: {
    width: "100%",
    height: 80,
    zIndex: 200,
    marginTop: 10,
    borderWidth: 1,
  },
});
export default ProfileScreen;
