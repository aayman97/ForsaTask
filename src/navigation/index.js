import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RetailScreen from "../screens/RetailScreen";
import OffersScreen from "../screens/OffersScreen";
import TabsIcon from "../components/TabsIcon";
import { DiscountTabNotActiveIcon, HomeTabActiveIcon, HomeTabNotActiveIcon, TagTabActiveIcon, UserTabNotActiveIcon } from "../resources/assets/SVGs";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "android" ? 60 : 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <TabsIcon
                focused={focused}
                inActiveIcon={<HomeTabNotActiveIcon width={22} height={22} />}
                activeIcon={<HomeTabActiveIcon width={22} height={22} />}
                label={"Home"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Retail"
        component={RetailScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <TabsIcon
                focused={focused}
                inActiveIcon={<TagTabActiveIcon width={22} height={22} />}
                activeIcon={<TagTabActiveIcon width={22} height={22} />}
                label={"Retail"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <TabsIcon
                focused={focused}
                inActiveIcon={<DiscountTabNotActiveIcon width={22} height={22} />}
                activeIcon={<DiscountTabNotActiveIcon width={22} height={22} />}
                label={"Offers"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <TabsIcon
                focused={focused}
                inActiveIcon={<UserTabNotActiveIcon width={22} height={22} />}
                activeIcon={<UserTabNotActiveIcon width={22} height={22} />}
                label={"Profile"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
