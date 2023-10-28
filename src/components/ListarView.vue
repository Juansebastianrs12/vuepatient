<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h2>Lista de todos los pacientes en la base de datos</h2>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>DOCUMENTO</th>
                <th>NOMBRE COMPLETO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="paciente in pacientes" :key="paciente.id">
                <td>{{ paciente.id }}</td>
                <td>{{ paciente.Cedula }}</td>
                <td>{{ paciente.Nombre }} {{ paciente.Apellidos }}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="Acciones">
                    <router-link :to="{ name: 'editar', params: { id: paciente.id } }" class="btn btn-info">Editar</router-link>
                    <button type="button" @click="borrarPaciente(paciente.id)" class="btn btn-danger">Borrar</button>
                    <router-link :to="{ name: 'resultado', params: { id: paciente.id } }" class="btn btn-info">Resultado</router-link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer text-muted">
          <router-link :to="{ name: 'home' }" class="btn btn-info">Volver</router-link>
          &copy; Software Solutions
        </div>
      </div>
    </div>
  </template>
<script>
export default {
    data(){
        return {
            pacientes:[]
        }
    },
    created:function(){
        this.consultarPacientes();
    },
    methods:{
        //http://localhost/api/
        consultarPacientes(){
            fetch('http://localhost/api/')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.pacientes=[]
                if(typeof datosRespuesta[0].success==='undefined'){
                    this.pacientes=datosRespuesta;
                }

            })
            .catch(console.log)
        },
        borrarPaciente(id){
            console.log(id)
            //http://localhost/api/?borrar=
            fetch('http://localhost/api/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                window.location.href="listar"

            })
            .catch(console.log)
        }

    }
}
</script>