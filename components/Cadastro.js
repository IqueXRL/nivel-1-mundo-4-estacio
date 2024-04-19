import React, { useState } from "react";
import { View, Text, TextInput, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "./Button";

const CadastroFornecedor = ({ onCadastroSubmit }) => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [categorias, setCategorias] = useState("");
  const [imagem, setImagem] = useState(null);

  const handleCadastro = () => {
    if (!nome || !endereco || !contato || !categorias) {
      showAlert("Erro", "Por favor, preencher todos os campos.");
      return;
    }

    const novoFornecedor = { nome, endereco, contato, categorias, imagem };
    onCadastroSubmit(novoFornecedor);
    clearFields();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets && result.assets.length > 0 ? result.assets[0].uri : null);
    }
  };

  const clearFields = () => {
    setNome("");
    setEndereco("");
    setContato("");
    setCategorias("");
    setImagem(null);
  };

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Fornecedor</Text>

      <TextInput style={styles.input} placeholder="Nome Completo" value={nome} onChangeText={(text) => setNome(text)} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={(text) => setEndereco(text)} />
      <TextInput style={styles.input} placeholder="Contato" value={contato} onChangeText={(text) => setContato(text)} />
      <TextInput style={styles.input} placeholder="Categoria/Produto" value={categorias} onChangeText={(text) => setCategorias(text)} />

      <CustomButton title="Escolher Imagem" onPress={pickImage} />

      {imagem && <Image source={{ uri: imagem }} style={styles.image} />}

      <CustomButton style={styles.submitButton} title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: 300,
    fontSize: 16,
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: 160,
    height: 160,
    marginTop: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default CadastroFornecedor;
