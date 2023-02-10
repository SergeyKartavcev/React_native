
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Posts from "./PostsScreen";
import CreatePost from "./CreatePostsScreen";
import Profile from "./ProfileScreen";



const Tabs = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }else if (route.name === "CreatePost") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Posts" component={Posts}
       />
      <Tabs.Screen name="CreatePost" component={CreatePost} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});