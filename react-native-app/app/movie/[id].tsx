import { getMovieById, Movie } from "@/services/Movies.Service";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    console.log("Haciendo solicitud para id:", id);

    getMovieById(Number(id))
      .then((data) => {
        console.log("Película encontrada:", data);
        setMovie(data);
      })
      .catch((err) => {
        console.error("Error al obtener la película:", err);
        setError("Película no encontrada.");
      });
  }, [id]);

  if (error || !movie) {
    return (
      <View style={styles.container}>
        <Text>{error || "Película no encontrada."}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Image source={{ uri: movie.img }} style={styles.image} />
      <Text style={styles.label}>Autor:</Text>
      <Text
        style={{ color: "blue", textDecorationLine: "underline" }}
        onPress={() =>
          router.push({
            pathname: "/auto/[name]",
            params: { name: movie.author },
          })
        }
      >
        Autor: {movie.author}
      </Text>{" "}
      <Text style={styles.label}>Descripción:</Text>
      <Text>{movie.details}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  image: {
    width: "20%",
    height: 330,
    resizeMode: "cover",
    marginVertical: 20,
    borderRadius: 10,
  },
});

export default MovieDetails;
