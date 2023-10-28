<template>
  <div class="container">
    <div class="card">

      <div class="card-header">
        <h2>Información Registrada del Paciente con CC. {{ paciente.Cedula }}</h2>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Edad</th>
              <th>Género</th>
              <th>EPS</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ paciente.Nombre }}</td>
              <td>{{ paciente.Apellidos }}</td>
              <td>{{ paciente.Edad }}</td>
              <td>{{ paciente.Genero }}</td>
              <td>{{ paciente.Eps }}</td>
              <td>
                <router-link :to="{ name: 'home' }" class="btn btn-primary">Volver</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card-header">
        <h2>Resultados de Laboratorio para el Paciente con CC. {{ paciente.Cedula }}</h2>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Tiempo de Protrombina</th>
              <th>Tiempo de Tromboplastina Parcial</th>
              <th>Antitrombina III</th>
              <th>Tiempo de Trombina</th>
              <th>Fibrinógeno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ paciente.TP }}</td>
              <td>{{ paciente.PTT }}</td>
              <td>{{ paciente.ATIII }}</td>
              <td>{{ paciente.TT }}</td>
              <td>{{ paciente.Fibrinogeno }}</td>
              <td>
                <router-link :to="{ name: 'home' }" class="btn btn-primary">Volver</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card-footer text-muted">
        &copy; Software Solutions 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paciente: {
        id: '',
        Cedula: '',
        Nombre: '',
        Apellidos: '',
        Edad: '',
        Genero: '',
        TP: '',
        PTT: '',
        ATIII: '',
        TT: '',
        Fibrinogeno: '',
      },
    };
  },
  created() {
    this.obtenerInformacionID();
  },
  methods: {
    obtenerInformacionID() {
      fetch('http://localhost/api/?consultarCC=' + this.$route.params.Cedula)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log("CC del paciente es " + this.$route.params.Cedula);
          console.log("Resultado API ", datosRespuesta);

          if (datosRespuesta && Object.keys(datosRespuesta).length > 0) {
            // Asigna los datos de la respuesta a this.paciente
            this.paciente = datosRespuesta;
          }
        })
        .catch(console.log);
    },
  },
};
</script>
