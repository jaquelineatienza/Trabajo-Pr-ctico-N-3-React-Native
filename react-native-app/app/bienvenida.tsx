import Header from "@/components/header";
import { router } from "expo-router";
import React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const peliculas = [
  {
    id: "1",
    titulo: "Harry Potter y la piedra filosofal",
    descripcion: "Una epopeya espacial sobre el amor, el tiempo y la ciencia.",
    imagen: "https://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg", // URL de la imagen
  },
  {
    id: "2",
    titulo: "Harry potter y la cámara secreta",
    descripcion: "Sueños dentro de sueños en un thriller alucinante.",
    imagen: require("../assets/images/harryPotter2.jpg"), // Corrected URL de la imagen
  },
  {
    id: "3",
    titulo: "Harry Potter y el prisionero de Azkaban",
    descripcion: "Un general traicionado busca redención en la arena.",
    imagen: require("../assets/images/harryPotter3.jpg"),
  },
  {
    id: "4",
    titulo: "Harry Potter y el cáliz de fuego",
    descripcion: "Una lucha por sobrevivir en el espacio profundo.",
    imagen: require("../assets/images/harryPotter4.jpg"),
  },
  {
    id: "5",
    titulo: "Harry Potter y la Orden del Fénix",
    descripcion:
      "Una joven desafía un sistema injusto en una competencia mortal.",
    imagen: require("../assets/images/harryPotter5.jpg"),
  },
  {
    id: "6",
    titulo: "Harry Potter y el misterio del príncipe",
    descripcion: "Un romance moderno entre sueños y sacrificios.",
    imagen: require("../assets/images/harryPotter6.jpg"),
  },
  {
    id: "7",
    titulo: "Harry Potter y las Reliquias de la Muerte",
    descripcion: "Una aventura épica para destruir un anillo oscuro.",
    imagen: require("../assets/images/harryPotter7.jpg"),
  },
];

export default function Bienvenida() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titulo}>🎬 7 Películas de harry potter</Text>
      <FlatList
        data={peliculas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Conditional rendering for image source */}
            <Image
              source={
                typeof item.imagen === "string" &&
                item.imagen.startsWith("http")
                  ? { uri: item.imagen }
                  : item.imagen
              }
              style={{ width: 210, height: 250, marginBottom: 10 }}
              resizeMode="cover"
            />
            <Text style={styles.nombre}>{item.titulo}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: "#555",
  },
});
