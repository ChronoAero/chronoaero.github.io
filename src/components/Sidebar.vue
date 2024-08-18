<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const linkmap = {
  '/': ['-', '/about'],
  '/about' : ['/', '-']
}

function map(s){
  return linkmap[s];
}
</script>

<template>
    <div class="min-w-72 md:min-w-96 sm:flex-col flex-row flex text-center bg-slate-800 text-contrast">
      <template v-if="map(route.path)[0] != '-'">
        <RouterLink to="/">
          <p class="m-5">Home</p>
        </RouterLink>
      </template>
      <div class="bg-cyan-950 grow flex flex-col-reverse">
        <template v-if="route.path == '/'">
            <img src="./images/chrono_code.png" class="w-full pixel "/>
        </template>
        <template v-if="route.path == '/about'">
            <img src="./images/chrono_packages.png" class="w-full pixel"/>
        </template>
      </div>
      <template v-if="map(route.path)[1] != '-'">
        <RouterLink to="/about" class="mt-auto flex-grow-0">
            <p class="m-5">About</p>
        </RouterLink>
      </template>
    </div>
</template>