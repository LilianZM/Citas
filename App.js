import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import Formulario from "./src/components/Formulario";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const nuevaCita = () => {
    console.log("Diste click en nueva cita");
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        App de Citas Médicas{" "}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={nuevaCita} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextNuevaCitas}>Nueva Cita</Text>
      </Pressable>

      <Formulario 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#d390b2ff",
    fontWeight: "600",
  },
  titleBold: {
    fontWeight: "900",
    color: "#412e3dff",
    textAlign: "center",
  },
  btnNuevaCita: {
    marginTop: 20,
    backgroundColor: "#ce8eaeff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNuevaCitas: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
});
