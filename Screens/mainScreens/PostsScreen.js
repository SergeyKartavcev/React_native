import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const Posts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  console.log("route.params", route.params);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

  return (
    <View tyle={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
            
            <Text> {item.name}</Text>

            <View style={{flex: 1,
            width: "100%",
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("Коментарии")}
            
            >
              <Image
                source={require("../../assets/Shape.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Карта")}
            style={{flex: 1,}}
            >
              <Image
                source={require("../../assets/map-pin.png")}
              />
              <Text> {item.location}</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Posts;
