import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/LoginScreen";
import Registration from "./Screens/RegistrationScreen";
import HomeScreen from "./Screens/HomeScreen";
import CreatePost from "./Screens/CreatePostsScreen";
import Profile from "./Screens/ProfileScreen";
import Posts from "./Screens/PostsScreen";
const MainStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Регистрация", headerStyle: {} }}
        />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={HomeScreen} />
   <MainStack.Screen name="Posts" component={Posts} />
        <MainStack.Screen name="CreatePost" component={CreatePost} />
        <MainStack.Screen name="Profile" component={Profile} />
        
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
