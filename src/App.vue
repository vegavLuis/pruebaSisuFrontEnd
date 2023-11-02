<template>
  <v-container>
    <v-alert :text="mensajeAlerta" type="success" v-if="alerta"></v-alert>
    <br />
    <v-form @submit.prevent="agregarDatos(datos)">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Nombre"
            v-model="datos.nombre"
            :rules="rules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Edad"
            v-model="datos.edad"
            :rules="rules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Pais"
            v-model="datos.pais"
            :rules="rules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Estado"
            v-model="datos.estado"
            :rules="rules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Ciudad"
            v-model="datos.ciudad"
            :rules="rules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" color="primary">Enviar</v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      rules: [
        (value) => {
          if (value) return true;
          return "Este campo es obligatorio";
        },
      ],
      datos: [],
      alerta: false,
      mensajeAlerta: "",
    };
  },
  methods: {
    alertaT() {
      this.alerta = true;
      setTimeout(() => {
        this.alerta = false;
      }, "3000");
    },
    agregarDatos(item) {
      // console.log('ya se envio', item)
      this.alertaT();
      this.axios
        .post("/save", item)
        .then((res) => {
          this.alertaT();
          this.mensajeAlerta = res.data.mensaje;
          this.datos = [];
          console.log(item);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped></style>
