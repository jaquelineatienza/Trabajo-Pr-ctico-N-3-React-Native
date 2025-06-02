import { getAllMovies, saveMovie } from "@/services/Movies.Service";
import { router } from "expo-router";
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

export default function Bienvenida() {
  const [nameMovie, setNameMovie] = useState("");
  const [detail, setDetail] = useState("");
  const [autor, setAutor] = useState("");
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getAllMovies().then(setMovies).catch(console.error);
  }, []);

  const handleEnviar = async () => {
    try {
      await saveMovie(nameMovie, detail, autor);
      const updatedMovies = await getAllMovies();
      setMovies(updatedMovies);
      setNameMovie("");
      setDetail("");
      setAutor("");
    } catch (err) {
      console.error("Error guardando película", err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre de la película</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el título"
          value={nameMovie}
          onChangeText={setNameMovie}
        />
        <Text style={styles.label}>Autor</Text>
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <Text style={styles.label}>Detalles de la película</Text>
        <TextInput
          style={styles.input}
          placeholder="Detalles"
          value={detail}
          onChangeText={setDetail}
        />
        <Button title="Guardar película" onPress={handleEnviar} />

        <FlatList
          data={movies}
          style={styles.list}
          keyExtractor={(item) =>
            item.id?.toString() ?? Math.random().toString()
          }
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <View style={styles.movieItem}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 210, height: 250, marginBottom: 10 }}
                resizeMode="cover"
              />
              <Text style={styles.movieText}>titulo: {item.title}</Text>
              <Text>Autor: {item.author}</Text>
              <Text>Detalles: {item.details}</Text>
              <Button
                title="Ver detalles"
                onPress={() => router.push(`/movie/${item.id}`)}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
    alignSelf: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    width: "100%",
    marginBottom: 12,
    borderRadius: 5,
  },
  list: {
    width: "100%",
    marginTop: 20,
  },
  movieItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 40,
    margin: 5,
    backgroundColor: "#fff",
    maxWidth: "50%",
  },
  movieText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
