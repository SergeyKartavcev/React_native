import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/auth/LoginScreen";
import Registration from "./Screens/auth/RegistrationScreen";
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
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Login" component={Login} 
        options={{ headerShown: false }}/>

        <MainStack.Screen name="Home" component={HomeScreen}/>
        <MainStack.Screen name="Публикации" component={Posts}
        options={{ title: "Войти", headerStyle: {backgroundColor: "#FFFFFF",} }} />
        <MainStack.Screen name="Создать пост" component={CreatePost}
        options={{ title: "Войти", headerStyle: {backgroundColor: "#FFFFFF",} }} />
        <MainStack.Screen name="Профиль" component={Profile}
        options={{ title: "Войти", headerStyle: {backgroundColor: "#FFFFFF",} }} />
        
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

