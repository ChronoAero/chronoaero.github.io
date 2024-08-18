<script>
import { ref } from 'vue'

const count = ref(0);
const arr = ref(['-', '\\', '|', '/']);

const timer = ref(10);

const funFacts = ref([
  "I use printf(\":)\"); to debug in C++",
  "I think cats are cute...",
  "I am somewhere between an ISTJ and INTP... I guess?",
  "I often listen to some random Japanese musics I accumulate overtime...",
  "I played Genshin Impact, Honkai: Star Rail, and Zenless Zone Zero...",
  "You know that you can read the full list of facts on my repository, right?",
  "I think I use ellipsises (...) in chats a lot...",
  "I did not and will not take COMP1021 >:)",
  "Plans for my 3rd semester: COMP2611, COMP2711, MATH2121, MATH2411, ...",
  "This random generator may generate the same fact twice... It's intentional!",
  "Please do not be surprised if I speak in Putonghua... I cannot speak Canto tho :(",
  "I am also a Pokemon fan hehe... I have a Popplio and a Mudkip plush",
  "I would like to ask how to read \"Poisson\" distribution",
  "This website is developed on http://localhost:5173"
])

const factsID = ref(-1);

setInterval(() => {count.value++;}, 250);
setInterval(() => {if(timer.value < 10){timer.value++}}, 1000);

export default{
  setup(){
    return {
      count,
      arr,
      funFacts,
      factsID,
      timer
    }
  }
}

</script>


<template>
  <div class="p-5 overflow-y-scroll">
    <h1 class="text-contrast text-4xl">Hello!</h1>
    <p class="text-subcontrast">
      Hello! I am <span class="text-contrast">Joshua</span>. When online I usually go by my alter-ego nickname <span class="text-contrast">ChronoAero</span> (Something I made up back in elementary school). 
      I just came up with the name from a custom level named "Chronos" a game called Geometry Dash I played back then. 
      But anyway, I know that "Chronos" means "time" by now and as I am indeed intrigued by the concept of time, I decided to keep it.
      I append the second part to make it longer and I want something related to the elements... 
    </p>
    <p class="text-subcontrast">
      I even came up with a whole original character for this alter-ego... looking forward to make a better sketch of it.
    </p>
    <br/>
    <p class="text-subcontrast">
      Anyway, <span class="text-contrast">I am currently a year 2 student in the COMP program in HKUST.</span>
      Currently, I am grinding computer science concepts and trying to gain more experience in the field.
      I am thinking to build this page for links to my works, share some interesting things, and provide contacts for you to reach out.
      Moreover, I need to experiment around with some web application tools...
    </p>
    <br/>
    <p class="text-subcontrast">
      For now, you may contact me via email on <a href="mailto:jtanav@connect.ust.hk" class="text-contrast underline hover:text-symbols">jtanav@connect.ust.hk</a>
    </p>
    <br/>
    <p class="text-symbols">
      This page may look quite basic now... I will try to develop it into an interesting one. {{ arr[count % 4] }}
    </p>
    <br/>
    <p class="text-contrast py-2 underline">
      For now, please enjoy this:
    </p>
    <div class="flex space-x-2 items-center">
      <button class="bg-subcontrast hover:bg-symbols text-white rounded-lg py-1 px-2 shrink-0 text-center" @click=" () => {if(timer!=10){ return; }factsID = Math.floor(Math.random() * 1000) % funFacts.length; timer = 0;}">{{ timer == 10 ? "Click Here for Random Facts" : "Available in " + (10-timer) + "s..."  }}</button>
      <div class="text-contrast">
        {{ factsID == -1 ? "" : funFacts[factsID]  }}
      </div>
    </div>
  </div>
</template>