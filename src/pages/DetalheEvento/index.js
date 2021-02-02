import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
	View,
  Text,
	Image,
	TouchableOpacity,
	Linking,
} from "react-native";
import * as MailComposer from "expo-mail-composer";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";

import api from "../../services/api";

import styles from "./styles";

export default function DetalheEvento() {
	const navigation = useNavigation();
	const route = useRoute();

	const evento = route.params.evento;
	const [organizador, setOrganizador] = useState("");

	const message = `Olá ${organizador.nome}! vim pelo HELPFEST, me interessei em seu evento ${evento.nome_festa}. Quero saber mais...`;

	async function loadOrganizador() {
		const response = await api.get(`/organizador/search`, {
			headers: {
				Authorization: evento.email_organizador,
			},
		});

		setOrganizador(response.data.organizador[0]);
	}

	useEffect(() => {
		loadOrganizador();
	}, []);

	const goBack = () => {
		navigation.goBack();
	};

	// Função E-mail
	const sendMail = () => {
		MailComposer.composeAsync({
			subject: `Evento HELPFEST: ${evento.nome_festa}`,
			recipients: [organizador.email],
			body: message,
		});
	};

	// Função Whatsapp
	const sendWhatsapp = () => {
		Linking.openURL(
			`whatsapp://send?phone=${organizador.whatsapp}&text=${message}`
		);
	};

	// Função Tel
	const sendCall = () => {
		Linking.openURL(`tel:${organizador.telefone}`);
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.imgBack}
				resizeMode="cover"
				source={{
					uri: `${evento.url}`,
				}}
			/>

			<View style={styles.card}>
				<View style={styles.cardHeader}>
					<TouchableOpacity onPress={goBack}>
						<Feather
							style={styles.cardTitleArrow}
							name="arrow-left"
							size={30}
							color="rgba(16, 14, 33, 1)"
						/>
					</TouchableOpacity>
					<Text style={styles.cardTitle}>{evento.nome_festa}</Text>
				</View>

				<View style={styles.cardDetails}>
					<View style={styles.cardDetailsInfo}>
						<Text style={styles.cardDetailsInfoTextBold}>Data: </Text>
						<Text style={styles.cardDetailsInfoText}>
							{evento.data_festa}
						</Text>
					</View>

					<View style={styles.cardDetailsInfo}>
						<Text style={styles.cardDetailsInfoTextBold}>Horário: </Text>
						<Text style={styles.cardDetailsInfoText}>
							{evento.horario_inicio}
						</Text>
						<Text style={styles.cardDetailsInfoTextHorario}>às</Text>
						<Text style={styles.cardDetailsInfoText}>
							{evento.horario_fim}
						</Text>
					</View>

					<View>
						<Text style={styles.cardDetailsInfoTextBold}>Local: </Text>
						<Text style={styles.cardDetailsInfoTextLocal}>
							{evento.rua} {evento.numero}, {evento.cidade} - {evento.uf}
						</Text>
					</View>
				</View>

				<View style={styles.cardTextArea}>
					<Text style={styles.cardTextAreaTitle}>Atrações</Text>
					<View style={styles.cardTextAreainfo}>
						<Text style={styles.cardTextAreainfoText}>
							{evento.outros}
						</Text>
					</View>
				</View>

				<View style={styles.cardFooter}>
					<Text style={styles.cardFooterText}>{organizador.nome}</Text>

					<TouchableOpacity onPress={sendMail}>
						<View style={styles.cardFooterOrgInfo}>
							<MaterialIcons name="email" size={20} color="#FFA4C4" />
							<Text style={styles.cardFooterTextMail}>
								{organizador.email}
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={sendCall}>
						<View style={styles.cardFooterOrgInfo}>
							<Feather name="smartphone" size={20} color="#4C83BF" />
							<Text style={styles.cardFooterTextTelefone}>
								{organizador.telefone}
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={sendWhatsapp}>
						<View style={styles.cardFooterOrgInfo}>
							<Ionicons name="logo-whatsapp" size={20} color="#34af23" />
							<Text style={styles.cardFooterTextWhatsapp}>
								{organizador.whatsapp}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
