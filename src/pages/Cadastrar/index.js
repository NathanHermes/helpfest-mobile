import React, { useState } from "react";
import {Feather, FontAwesome5, MaterialCommunityIcons,} from "@expo/vector-icons";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [verSenha, setVerSenha] = useState(true);
  const [verSenhaConfirm, setVerSenhaConfirm] = useState(true);

  const handleSenha = () => {
    switch (verSenha) {
      case false:
        setVerSenha(true);
        break;
      case true:
        setVerSenha(false);
    }
  };

  const handleSenhaConfirm = () => {
    switch (verSenhaConfirm) {
      case false:
        setVerSenhaConfirm(true);
        break;
      case true:
        setVerSenhaConfirm(false);
        break;
    }
  }

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  }

  return (
    <LinearGradient colors={["#B4E4FF", "#80B2F2"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>CADASTRAR</Text>

          <View style={styles.groupInput}>
            <FontAwesome5
              style={styles.inputIcon}
              name="user-circle"
              size={30}
              color="rgba(40, 42, 54, .5)"
            />
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Nome de usuário"
            />
          </View>

          <View style={styles.groupInput}>
            <MaterialCommunityIcons
              style={styles.inputIcon}
              name="email-outline"
              size={28}
              color="rgba(40, 42, 54, .5)"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="E-mail"
            />
          </View>

          <View style={styles.groupInput}>
            <MaterialCommunityIcons
              style={styles.inputIcon}
              name="cellphone"
              size={28}
              color="rgba(40, 42, 54, .5)"
            />
            <TextInput
              style={styles.input}
              value={telefone}
              onChangeText={(text) => setNome(text)}
              placeholder="Telefone"
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
                placeholder="Senha"
                autoCompleteType="password"
              />
            )}

            {!!verSenha || (
              <TextInput
                secureTextEntry={false}
                style={styles.inputSenha}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Senha"
                autoCompleteType="password"
              />
            )}

            <TouchableOpacity style={styles.btnEye} onPress={handleSenha}>
              {!verSenha || (
                <Feather
                  name="eye-off"
                  size={25}
                  color="rgba(40, 42, 54, .5)"
                />
              )}

              {!!verSenha || (
                <Feather name="eye" size={28} color="rgba(40, 42, 54, .5)" />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.groupInput}>
            <Feather
              style={styles.inputIcon}
              name="lock"
              size={28}
              color="rgba(40, 42, 54, .5)"
            />
            {!verSenhaConfirm || (
              <TextInput
                secureTextEntry={true}
                style={styles.inputSenha}
                value={passwordConfirm}
                onChangeText={(text) => setPasswordConfirm(text)}
                placeholder="Confirmar senha"
                autoCompleteType="password"
              />
            )}

            {!!verSenhaConfirm || (
              <TextInput
                secureTextEntry={false}
                style={styles.inputSenha}
                value={passwordConfirm}
                onChangeText={(text) => setPasswordConfirm(text)}
                placeholder="Confirmar senha"
                autoCompleteType="password"
              />
            )}

            <TouchableOpacity style={styles.btnEye} onPress={handleSenhaConfirm}>
              {!verSenhaConfirm || (
                <Feather
                  name="eye-off"
                  size={25}
                  color="rgba(40, 42, 54, .5)"
                />
              )}

              {!!verSenhaConfirm || (
                <Feather name="eye" size={28} color="rgba(40, 42, 54, .5)" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={styles.normalText}>Já tem uma conta?</Text>
            <Text style={styles.textLinkLogin}>CLIQUE AQUI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
