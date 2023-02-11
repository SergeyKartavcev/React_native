import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Posts from "./PostsScreen";
import CreatePost from "./CreatePostsScreen";
import Profile from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tabs.Navigator
      screenOptions={{
        showLabel: false,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="Публикации"
        component={Posts}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name="grid-view" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="Создать публикацию"
        component={CreatePost}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="pluscircle" size={35} color="#ffa500" />
          ),
        }}
      />


      <Tabs.Screen name="Профиль" component={Profile}
       options={{
        tabBarIcon: ({ focused, size, color }) => (
          <Feather name="user" size={24} color="black" />
        ),
      }} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
