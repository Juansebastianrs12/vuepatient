<template>
    <div class="container">
        
        <div class="card">
            <div class="card-header">
                RESULTADOS DE LABORATORIO PARA EL PACIENTE CON CC. {{ paciente.Cedula }}
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>


                            <th>Tiempo de Protrombina</th>
                            <th>Tiempo de Tromboplastina Parcial</th>
                            <th>Antitrombina III</th>
                            <th>Tiempo de Trombina</th>
                            <th>Fibrinógeno</th>
                            


                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >


                            <td>{{paciente.TP}}</td>
                            <td>{{paciente.PTT}}</td>
                            <td>{{paciente.ATIII}}</td>
                            <td>{{paciente.TT}}</td>
                            <td>{{paciente.Fibrinogeno}}</td>


                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    
                                    <router-link :to="{name:'listar',params:{id:paciente.id}}" class="btn btn-info">volver</router-link>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div class="card-footer text-muted">
                Copyright: Bioing Company 2023
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data(){
        return {
            paciente:[]
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
                console.log(this.$route.params.id);

            })
            .catch(console.log)
        },

    }
}
</script>