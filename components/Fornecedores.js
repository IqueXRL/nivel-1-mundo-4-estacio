import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

const ListaFornecedores = ({ fornecedores }) => {
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const fornecedoresFiltrados = fornecedores.filter((fornecedor) => {
    const categoriaMatch = categoriaFiltro === "" || fornecedor.categorias.includes(categoriaFiltro);
    return categoriaMatch;
  });

  const handleCategoriaFiltroChange = (text) => {
    setCategoriaFiltro(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Fornecedores</Text>

      <TextInput
        style={styles.input} placeholder="Pesquisar" value={categoriaFiltro} onChangeText={handleCategoriaFiltroChange}/>

      {fornecedoresFiltrados.map((fornecedor, index) => (
        <View key={index} style={styles.fornecedorContainer}>
          <Text style={styles.nomeFornecedor}>Nome: {fornecedor.nome}</Text>
          <Text>Endereço: {fornecedor.endereco}</Text>
          <Text>Contato: {fornecedor.contato}</Text>
          <Text>Categoria: {fornecedor.categorias}</Text>

          {fornecedor.imagem && <Image source={{ uri: fornecedor.imagem }} style={styles.imagemFornecedor} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    fontSize: 16,
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
  },
  fornecedorContainer: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  nomeFornecedor: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  imagemFornecedor: {
    width: 100,
    height: 100,
    marginTop: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
});

export default ListaFornecedores;

