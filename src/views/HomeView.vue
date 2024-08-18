<script>
import { ref, onUnmounted } from 'vue'

const count = ref(0);
const arr = ref(['-', '\\', '|', '/']);

const interval = setInterval(() => {count.value++;}, 250);

export default{
  setup(){
    return {
      count,
      arr
    }
  }
}

</script>


<template>
  <div class="p-5">
    <h1 class="text-contrast text-4xl">Hello!</h1>
    <p class="text-subcontrast">
      Hello! I am Joshua. When online I usually go by my alter-ego nickname ChronoAero (Something I made up back in elementary school). 
      I just came up with the name from a custom level named "Chronos" a game called Geometry Dash I played back then. 
      But anyway, I know that "Chronos" means time by now and as I am indeed intrigued by the concept of time, I decided to keep it.
      I append the second part to make it longer and I want something related to the elements... 
    </p>
    <br/>
    <p class="text-subcontrast">
      Anyway, I am currently a year 2 student in the COMP program in HKUST.
      Currently, I am grinding computer science concepts and trying to gain more experience in the field.
      I am thinking to build this page for links to my works, share some interesting things, and provide contacts for you to reach out.
      Moreover, I need to experiment around with some web application tools...
    </p>
    <br/>
    <p class="text-symbols">
      This page may look quite basic now... I will try to develop it into an interesting one. {{ arr[count % 4] }}
    </p>
  </div>
</template>