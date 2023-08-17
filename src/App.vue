<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Rubrique from './components/Rubrique.vue'
import SocialPage from './components/SocialPage.vue';
import Test from './components/Test.vue'
</script>

<template>
  <div class="h-screen bg-gray-50">
    <nav>
      <NavBar />
      <Rubrique />
    </nav>
    <div class="flex h-full ">
      <Test />
      <!-- Scroll page for sociale and meeting -->
      <div class="w-full ">
        <SocialPage />
      </div>

    </div>

    
  </div>
</template>

<style scoped>



.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
