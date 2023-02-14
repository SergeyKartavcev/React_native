import React from "react";
import Posts from "./PostsScreen";
// import Profile from "./ProfileScreen";
import MapScreen from "./MapScreen";
import CreatePost from "./CreatePostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Публикации"
        component={Posts}
        options={{
          tabBarShowLabel: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Registration")}
            style={{ marginRight: 21,  }}>
               
              <Image
                source={require("../../assets/log-out.png")}
                color="#fff"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name="grid-view" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Создать публикацию"
        component={CreatePost}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="pluscircle" size={35} color="#ffa500" />
          ),
        }}
      />
      <Tab.Screen
        name="Карта"
        component={MapScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
