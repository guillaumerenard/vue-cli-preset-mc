<template>
  <div id="app">
    <div class="main" v-if="isAuthenticated">
      <button @click="logout">Logout</button>
      <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script src="./App.ts" lang="ts"></script>
<style src="./assets/styles/main.scss" lang="scss"></style>
