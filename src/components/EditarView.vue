<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h2><b>Página para editar un paciente</b></h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label for="Cedula">Documento de Identidad</label>
            <input type="text" class="form-control" name="Cedula" v-model="paciente.Cedula" id="Cedula" aria-describedby="helpCedula" placeholder="Ingrese el documento del paciente">
            <small id="helpCedula" class="form-text text-muted">Ejemplo: 1234567890</small>
          </div>
          <div class="form-group">
            <label for="Nombre">Nombre</label>
            <input type="text" class="form-control" name="Nombre" v-model="paciente.Nombre" id="Nombre" aria-describedby="helpNombre" placeholder="Ingrese el nombre del paciente">
            <small id="helpNombre" class="form-text text-muted">Ejemplo: Juan</small>
          </div>
          <div class ="form-group">
            <label for="Apellidos">Apellidos</label>
            <input type="text" class="form-control" name="Apellidos" v-model="paciente.Apellidos" id="Apellidos" aria-describedby="helpApellidos" placeholder="Ingrese los apellidos del paciente">
            <small id="helpApellidos" class="form-text text-muted">Ejemplo: Pérez Gómez</small>
          </div>
          <div class="form-group">
            <label for="Edad">Edad</label>
            <input type="number" class="form-control" name="Edad" v-model="paciente.Edad" id="Edad" aria-describedby="helpEdad" placeholder="Ingrese la edad del paciente">
            <small id="helpEdad" class="form-text text-muted">Ejemplo: 30</small>
          </div>
          <div class="form-group">
            <label for="Genero">Género</label>
            <select class="form-control" name="Genero" v-model="paciente.Genero" id="Genero">
              <option disabled value="">Seleccione el género del paciente</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
          <div class="form-group">
            <label for="Eps">EPS</label>
            <select class="form-control" name="Eps" v-model="paciente.Eps" id="Eps">
              <option disabled value="">Seleccione la EPS del paciente</option>
              <option value="Sura">Sura</option>
              <option value="Sanitas">Sanitas</option>
              <option value="Nueva Eps">Nueva Eps</option>
            </select>
          </div>
          <div class="form-group">
            <label for="TP">Tiempo de Protrombina (TP)</label>
            <input type="text" class="form-control" name="TP" v-model="paciente.TP" id="TP" aria-describedby="helpTP" placeholder="Ingrese el TP del paciente">
            <small id="helpTP" class="form-text text-muted">Ejemplo: 12.5 segundos</small>
          </div>
          <div class="form-group">
            <label for="PTT">Tiempo de Tromboplastina Parcial (PTT)</label>
            <input type="text" class="form-control" name="PTT" v-model="paciente.PTT" id="PTT" aria-describedby="helpPTT" placeholder="Ingrese el PTT del paciente">
            <small id="helpPTT" class="form-text text-muted">Ejemplo: 25 segundos</small>
          </div>
          <div class="form-group">
            <label for="ATIII">Antitrombina III (ATIII)</label>
            <input type="text" class="form-control" name="ATIII" v-model="paciente.ATIII" id="ATIII" aria-describedby="helpATIII" placeholder="Ingrese el ATIII del paciente">
            <small id="helpATIII" class="form-text text-muted">Ejemplo: 80%</small>
          </div>
          <div class="form-group">
            <label for="TT">Tiempo de Trombina (TT)</label>
            <input type="text" class="form-control" name="TT" v-model="paciente.TT" id="TT" aria-describedby="helpTT" placeholder="Ingrese el TT del paciente">
            <small id="helpTT" class="form-text text-muted">Ejemplo: 15 segundos</small>
          </div>
          <div class="form-group">
            <label for="Fibrinogeno">Fibrinógeno</label>
            <input type="text" class="form-control" name="Fibrinogeno" v-model="paciente.Fibrinogeno" id="Fibrinogeno" aria-describedby="helpFibrinogeno" placeholder="Ingrese el Fibrinógeno del paciente">
            <small id="helpFibrinogeno" class="form-text text-muted">Ejemplo: 250 mg/dL</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Modificar</button>
            <button type="reset" class="btn btn-warning">Cancelar</button>
            <router-link :to="{ name: 'listar' }" class="btn btn-info">Volver</router-link>
          </div>
        </form>
      </div>
      <div class="card-footer text-muted">
        &copy; Software Solutions 2023
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            paciente:{}
        }
    },
    created:function(){
        this.obtenerInformacionID();
    },
    methods:{
        obtenerInformacionID(){
            fetch('http://localhost/api/?consultar='+this.$route.params.id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.paciente=datosRespuesta[0];

            })
            .catch(console.log)
        },
        actualizarRegistro(){
            let datosEnviar={id:this.$route.params.id , Cedula:this.paciente.Cedula , Nombre:this.paciente.Nombre , Apellidos:this.paciente.Apellidos,Edad:this.paciente.Edad ,Genero:this.paciente.Genero,Eps:this.paciente.Eps ,TP:this.paciente.TP,PTT:this.paciente.PTT ,ATIII:this.paciente.ATIII ,TT:this.paciente.TT,Fibrinogeno:this.paciente.Fibrinogeno  }
            fetch('http://localhost/api/?actualizar='+this.$route.params.id ,{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='../listar' //Redirecciona a la ruta listar
            })) 
        }
    }

}
</script>