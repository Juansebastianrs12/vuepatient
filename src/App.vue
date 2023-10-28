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
</template> -->

<template> 
  <div class="app">
      <NavBarView />
  
      <router-view/>
    </div>
  </template>
  
  <script setup>
  import NavBarView from '@/components/NavBarView.vue';
  
  </script>
