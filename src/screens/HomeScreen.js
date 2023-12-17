import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Header from "../components/Header";
import OfferAlert from "../components/OfferAlert";

const HomeScreen = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <OfferAlert />
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
