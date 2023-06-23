import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { style } from "./style";
import Participant from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Adicionou participante");
  }

  return (
    <View style={style.container}>
       
      <View style={style.wrapper}>
        <Text style={style.textEvent}>Nome do Evento</Text>

        <Text style={style.textDate}>Sexta, 4 de Novembro de 2022.</Text>

        <View style={style.form}>
          <TextInput
            style={style.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity style={style.button} onPress={handleParticipantAdd}>
            <Text style={style.textButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
        <Participant />
        <Participant />
    </View>
  );
}
