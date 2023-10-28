// Verificación búsqueda de usuario por cédula

<template>
  <div class="container">
    <div class="card">
      <div class="card-header" style="background-color: #007BFF; color: white; text-align: center; font-weight: bold;">
        <b>Buscar resultados de laboratorio</b>
      </div>
      <div class="card-body" style="background-color: #f0f8ff; padding: 20px;">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="id">Cedula del paciente</label>
            <input type="text" class="form-control" id="ID" v-model="id" required>
          </div>
          <div class="text-center">
            <button type="button" @click="buscar" class="btn btn-info">Buscar</button>
            <button type="reset" class="btn btn-warning">Borrar</button>
            <router-link :to="{ name: 'home' }" class="btn btn-info">Volver</router-link>
          </div>
        </form>
      </div>

      <div class="card-footer text-muted" style="background-color: #007BFF; color: white; text-align: center;">
        Copyright: <b>Bioing Company</b>
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    data() {
      return {
        id: '',
      };
    },
    methods: {
      submitForm() {
        // No necesitas realizar ninguna acción aquí ya que la navegación se controla desde el botón 'Buscar'.
      },
      buscar() {
        if (this.id) {
          // Navegar a la ruta 'consulta' con el parámetro 'id'
          this.$router.push({ name: 'consulta', params: { Cedula: this.id } });
        }
      },
    },
  };
  </script>
  