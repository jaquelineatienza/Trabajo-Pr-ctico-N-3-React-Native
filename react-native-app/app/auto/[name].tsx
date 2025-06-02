import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AuthorDetails() {
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Autor</Text>
      <View style={styles.textAndimg}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/4c/2b/85/4c2b85cf808a824e1a031f169fd192a7.jpg",
          }}
          style={{ width: 200, height: 300 }}
        />
        <View style={styles.text}>
          <Text style={styles.name}>Nombre: {name}</Text>
          <Text style={{ flexWrap: "wrap" }}>
            Timothy Walter Burton nació el 25 de agosto de 1958 en la ciudad
            californiana de Burbank. Es el primero de los dos hijos de Bill y
            Jean Burton. Su madre trabajaba en una tienda de regalos y su padre
            era empleado municipal.[4]​ Su relación con sus padres y su hermano
            no era fluida, por lo que pronto se mudó con su abuela. Durante la
            mayor parte de su infancia representaba, con su hermano, parodias
            relacionadas con delitos sangrientos, y él mismo se consideraba
            introvertido. Una de sus anécdotas es la de haber simulado un
            asesinato para asustar a los vecinos, hasta tal punto que uno de
            ellos llamó a la policía, por lo que recibió el apodo «Axe Wound»
            (herida de hacha). Otro de sus pasatiempos favoritos era asustar a
            los hijos de sus vecinos con la llegada de extraterrestres que
            invadirían la Tierra.​ Se entretenía también con el diseño, área en
            la que demostró tener talento tras ganar un concurso de dibujos que
            serían usados en los camiones urbanos de su ciudad natal,​ pero
            nunca sintió afinidad por la lectura ni por el estudio.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textAndimg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
    width: "100%",
    gap: 30,
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
  },
});
