<!-- <template>
    <div class="container">
      <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="nav navbar-nav">
              
              <router-link to="/crear" class="navbar-brand">Crear</router-link> 
              <router-link to="/listar" class="navbar-brand">Consulta masiva</router-link>   
              <router-link to="/buscar" class="navbar-brand">Consulta paciente</router-link>      
              
          </div>
      </nav>
    </div>
    <br>
      <router-view/>
    </template>
     -->

// Barra de navegación fija
     
<template>
    <div class="dashboard">
      <ul class="nav nav-tabs">
        <li class="nav-item" @click="seleccionarOpcion('usuarios')">
          <a class="nav-link" :class="{ active: opcionSeleccionada === 'usuarios' }">Usuarios</a>
          <div v-if="opcionSeleccionada === 'usuarios'">
            <ul class="dropdown-menu">
              <li class="dropdown-item" @click="mostrarSubMenuYIraListarUsuario('listarUsuarios')">Búsqueda de resultados</li>
            </ul>
          </div>
        </li>
        <li class="nav-item" @click="seleccionarOpcion('Especialista')">
          <a class="nav-link" :class="{ active: opcionSeleccionada === 'Especialista' }">Especialista de Laboratorio</a>
          <div v-if="opcionSeleccionada === 'Especialista'">
            <ul class="dropdown-menu">

              <li class="dropdown-item" @click="mostrarSubMenuYIraCrearUsu('crearPac')">Ingresar Paciente</li>
              <li class="dropdown-item" @click="mostrarSubMenuYIraListaUsu('listarPac')">Consultar pacientes</li>
            </ul>
          </div>
        </li>
      </ul>
     
      <listar-usuarios v-if="subMenuSeleccionado === 'listarUsuarios'" @cerrar="mostrarSubMenu(null)" />
      <crear-entidad v-if="subMenuSeleccionado === 'crearPac'" @cerrar="mostrarSubMenu(null)" />
      <listar-entidades v-if="subMenuSeleccionado === 'listarPac'" @cerrar="mostrarSubMenu(null)" />
      
    </div>
  
  </template>
  
  
<script>
export default {
  data() {
    return {
      opcionSeleccionada: 'usuarios',
      subMenuSeleccionado: null,
    };
  },
  methods: {
    seleccionarOpcion(opcion) {
      this.opcionSeleccionada = opcion;
      this.subMenuSeleccionado = null;
    },

    mostrarSubMenu(subMenu) {
      this.subMenuSeleccionado = subMenu;
    },

    mostrarSubMenuYIraListarUsuario(subMenu) {
      this.mostrarSubMenu(subMenu); // Primero ejecuta mostrarSubMenu
      this.irABuscarUsuario(); // Luego ejecuta irAEditarUsuario
    },
    irABuscarUsuario() {
      console.log("reconoce tocar el botón");
      this.$router.push({ name: 'buscarCC' });
      this.mostrarSubMenu(null);
    },
    mostrarSubMenuYIraCrearUsu(subMenu) {
      this.mostrarSubMenu(subMenu); // Primero ejecuta mostrarSubMenu
      this.irACrearUsu(); // Luego ejecuta irAEditarUsuario
    },
    irACrearUsu() {
      console.log("reconoce tocar el botón");
      this.$router.push({ name: 'crear' });
      this.mostrarSubMenu(null);
    },
    mostrarSubMenuYIraListaUsu(subMenu) {
      this.mostrarSubMenu(subMenu); // Primero ejecuta mostrarSubMenu
      this.irAListarUsu(); // Luego ejecuta irAEditarUsuario
    },
    irAListarUsu() {
      console.log("reconoce tocar el botón");
      this.$router.push({ name: 'listar' });
      this.mostrarSubMenu(null);
    }
},
};
</script>

<style scoped>
  /* Estilos de tu componente */
</style>

<style scoped>
.dashboard {
  background-color: #007bff;
  color: white;
  padding: 22px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.btn-group {
  margin-top: 22px;
}

.btn {
  margin: 7px;
}

.opciones-principales {
  display: flex;
  justify-content: center;
  margin-top: 22px;
}

.sub-opciones {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.opciones button {
  margin: 7px;
}

.opciones button:hover {
  cursor: pointer;
}

.opciones-principales button:hover {
  cursor: pointer;
}

.nav-tabs .nav-item {
  cursor: pointer;
}

/* Agregar el estilo para el menú desplegable */
.dropdown-menu {
  display: none;
}

.nav-item:hover .dropdown-menu {
  display: block;
  position: absolute;
}
</style>
<style scoped>
.dashboard {
  background: linear-gradient(135deg, #53cbf3, #04599b);
  color: white;
  padding: 22px;
  border-radius: 10px;
  box-shadow: 0 7px 17px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.nav-tabs .nav-item {
  cursor: pointer;
}

.nav-link {
  color: white;
}

.nav-link.active {
  background-color: #0074cc;
  color: white;
}

.dropdown-menu {
  display: none;
  background-color: #0074cc;
  border: 1px solid #ccc;
}

.dropdown-item {
  color: white;
}

.nav-item:hover .dropdown-menu {
  display: block;
  position: absolute;
}
</style>