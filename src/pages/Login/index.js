import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { CheckBox } from 'react-native-elements';

import styles from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [verSenha, setVerSenha] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleSenha = () => {
    switch (verSenha) {
      case false:
        setVerSenha(true);
        break;
      case true:
        setVerSenha(false);
    }
  };

  const inChecked = () => {
    switch (checked) {
      case true:
        setChecked(false);
        break;
      case false:
        setChecked(true);
        break;
    }
  }

  const navigation = useNavigation();

  const navigateToCadastrar = () => {
    navigation.navigate('Cadastrar');
  }

  const navigateToHome = () => {
    navigation.navigate("Home");
  }

  return (
    <LinearGradient
      colors={['#B4E4FF', '#80B2F2']}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>ENTRAR</Text>

          <View style={styles.groupInput}>
            <FontAwesome5
              style={styles.inputIcon}
              name="user-circle"
              size={30}
              color="rgba(40, 42, 54, .5)"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Digite o email"
            />
          </View>

          <View style={styles.groupInput}>
            <Feather
              style={styles.inputIcon}
              name="lock"
              size={28}
              color="rgba(40, 42, 54, .5)"
            />
            {!verSenha || (
              <TextInput
                secureTextEntry={true}
                style={styles.inputSenha}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Digite a senha"
                autoCompleteType="password"
              />
            )}

            {!!verSenha || (
              <TextInput
                secureTextEntry={false}
                style={styles.inputSenha}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Digite a senha"
                autoCompleteType="password"
              />
            )}

            <TouchableOpacity style={styles.btnEye} onPress={handleSenha}>
              {!verSenha || (
                <Feather name="eye-off" size={25} color="rgba(40, 42, 54, .5)" />
              )}

              {!!verSenha || (
                <Feather name="eye" size={28} color="rgba(40, 42, 54, .5)" />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.groupCheckbox}>
            <CheckBox checkedColor="green" style={styles.checkBox} checked={checked} value={checked} onPress={inChecked} />

            <Text style={styles.text}>Manter-me Conectado</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={navigateToHome}>
            <Text style={styles.textButton}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToCadastrar}>
            <Text style={styles.textOtherOpition}>Ainda não tem uma conta?</Text>
            <Text style={styles.textLinkCadastrar}>CRIAR AGORA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
