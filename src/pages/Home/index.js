import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import AppLoading from "expo-app-loading";

import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import styles from "./styles";

export default function Home() {
  const [eventos, setEventos] = useState([]);
  const [totalEventos, setTotalEventos] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetalheEvento(evento) {
    navigation.navigate("DetalheEvento", { evento });
  }

  async function loadEventos() {
    if(loading) {
      return;
    }

    if(totalEventos > 0 && eventos.length === totalEventos) {
      return;
    }

    setLoading(true);
    const response = await api.get('/festa/index', {
      params: { page }
    });

    setEventos([...eventos, ...response.data]);
    setTotalEventos(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  handleRefresh = async () => {
    if(loading) {
      return;
    }

    setLoading(true);

    const response = await api.get('/festa/index');

    setEventos(response.data);
    setTotalEventos(response.headers['x-total-count']);

    setLoading(false);
  }

  useEffect(() => {
    loadEventos();
  }, []);

  let [fontsLoaded, error] = useFonts({
    Anton_400Regular,
    "RobotoMono-Regular": require("../../assets/fonts/RobotoMono-Regular.ttf"),
    "RobotoMono-Bold": require("../../assets/fonts/RobotoMono-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
         barStyle = "light-content"
         backgroundColor = "#100E21"
         hidden = {false}
         translucent = {false}
         networkActivityIndicatorVisible = {false}
      />

      <LinearGradient
        style={styles.navbar}
        colors={["#B4E4FF", "#80B2F2"]}
        start={[0.8, 0.2]}
      >
        <View style={styles.navbarContent}>
          <Text style={styles.title}>Helpfest</Text>
          <Text style={styles.navbarText}>Total de <Text style={styles.navbarTextBold}>{totalEventos} eventos</Text></Text>
        </View>
      </LinearGradient>

      <FlatList
        data={eventos}
        style={styles.cards}
        keyExtractor={evento => String(evento.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadEventos}
        onEndReachedThreshold={0.5}
        refreshing={loading}
        onRefresh={handleRefresh}
        renderItem={({ item: evento }) => (
          <View style={styles.festa}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToDetalheEvento(evento)}
            >
              <Image
                style={styles.img}
                resizeMode="cover"
                source={{
                  uri:
                    `${evento.url}`,
                }}
              />
              <View style={styles.textGroup}>
                <Text style={styles.textNome}>{evento.nome_festa}</Text>
                <Text style={styles.text}> - </Text>
                <Text style={styles.text}>{evento.data_festa}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
