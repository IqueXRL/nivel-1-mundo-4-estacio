import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CadastroFornecedor from "./components/Cadastro";
import ListaFornecedores from "./components/Fornecedores";

export default function App() {
	const [fornecedores, setFornecedores] = useState([]);

	const handleCadastroSubmit = (novoFornecedor) => 
		{setFornecedores([...fornecedores, novoFornecedor]);
	};

	return (
		<ScrollView contentContainerStyle={styles.scroll}>
			<View style={styles.sec}>
				<CadastroFornecedor onCadastroSubmit={handleCadastroSubmit} />
				<ListaFornecedores fornecedores={fornecedores} />
				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scroll: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	sec: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
