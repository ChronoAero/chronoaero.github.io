<script setup>
import {  RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <Header/>
  <div class="flex h-svh pt-14">
    <Sidebar/>
    <RouterView />
  </div>
  
</template>