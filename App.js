import React from "react";
import {Button} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/auth/LoginScreen";
import Registration from "./Screens/auth/RegistrationScreen";
import HomeScreen from "./Screens/mainScreens/HomeScreen";
import CreatePost from "./Screens/mainScreens/CreatePostsScreen";
// import Profile from "./Screens/mainScreens/ProfileScreen";
import Posts from "./Screens/mainScreens/PostsScreen";
import MapScreen from "./Screens/mainScreens/MapScreen";
import CommentsScreen from "./Screens/mainScreens/CommentsScreen"

const MainStack = createStackNavigator();

export default function App () {

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

        <MainStack.Screen name="Home" component={HomeScreen}
      options={{
     headerShown: false,
      }}/>

        <MainStack.Screen name="Публикации" component={Posts}/>
        <MainStack.Screen name="Создать пост" component={CreatePost}/>
        <MainStack.Screen name="Карта" component={MapScreen} />
        <MainStack.Screen name="Коментарии" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
