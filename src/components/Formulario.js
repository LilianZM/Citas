import { View, Text, Modal, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Formulario(props) {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const guardarCita = () => {
    // Aquí puedes manejar la lógica de guardar la cita (API, AsyncStorage, etc.)
    console.log({
      nombrePaciente,
      fecha,
      hora,
      sintomas,
    });

    // Limpia los campos
    setNombrePaciente("");
    setFecha("");
    setHora("");
    setSintomas("");
    // Cierra modal
    props.setModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={props.modalVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>Nueva Cita Médica</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del paciente"
          placeholderTextColor="#999"
          value={nombrePaciente}
          onChangeText={setNombrePaciente}
        />

        <TextInput
          style={styles.input}
          placeholder="Fecha (DD/MM/AAAA)"
          placeholderTextColor="#999"
          value={fecha}
          onChangeText={setFecha}
        />

        <TextInput
          style={styles.input}
          placeholder="Hora (HH:MM)"
          placeholderTextColor="#999"
          value={hora}
          onChangeText={setHora}
        />

        <TextInput
          style={[styles.input, styles.inputMultiline]}
          placeholder="Síntomas"
          placeholderTextColor="#999"
          value={sintomas}
          onChangeText={setSintomas}
          multiline={true}
          numberOfLines={3}
        />

        <Pressable onPress={guardarCita} style={styles.btnNuevaCita}>
          <Text style={styles.btnTextNuevaCitas}>Guardar Cita</Text>
        </Pressable>

        <Pressable
          onPress={() => props.setModalVisible(false)}
          style={styles.btnCerrar}
        >
          <Text style={styles.btnTextCerrar}>Cerrar</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111", 
    padding: 20,
  },
  modalText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  inputMultiline: {
    height: 80,
    textAlignVertical: "top",
  },
  btnNuevaCita: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    marginBottom: 10,
  },
  btnTextNuevaCitas: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  btnCerrar: {
    backgroundColor: "#dc3545",
    padding: 12,
    borderRadius: 8,
    width: "100%",
  },
  btnTextCerrar: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
