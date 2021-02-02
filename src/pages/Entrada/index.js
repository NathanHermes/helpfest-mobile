import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Animated } from "react-native";

import { AppLoading } from "expo";

import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import peopleDancing from "../../assets/images/peopleDancing.png";
import title from "../../assets/images/title.png";

import styles from "./styles";

export default function Entrada() {
  let [fontsLoaded, error] = useFonts({
    Anton_400Regular,
    "RobotoMono-Regular": require("../../assets/fonts/RobotoMono-Regular.ttf"),
    "RobotoMono-Bold": require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });

  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  function navigateToCadastrar() {
    navigation.navigate("Cadastrar");
  }

  const [flex, setFlex] = useState(new Animated.Value(5));

  Animated.timing(flex, {
    toValue: 0.8,
    duration: 1500,
    useNativeDriver: false,
  }).start();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
        <Animated.View
          style={{
            flex: flex,
            paddingHorizontal: 25,
            justifyContent: "center",
            backgroundColor: "#80B2F2",
          }}
        >
          <Image
            source={peopleDancing}
            resizeMode="contain"
            style={styles.imagePeople}
          />
        </Animated.View>

      <View style={styles.option}>
        <Image source={title} resizeMode="contain" style={styles.imageTitle} />
        <View style={styles.groupButton}>
          <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={navigateToCadastrar}>
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
