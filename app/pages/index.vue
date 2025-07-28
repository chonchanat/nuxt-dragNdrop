<template>
  <div class="flex">
    <Sidebar />
    <Devider />
    <Content />
  </div>
</template>

<script setup>
import Sidebar from '~/components/sidebar/Sidebar.vue';
import Devider from '~/components/Devider.vue';
import Content from '~/components/content/Content.vue';
</script>

<style scoped>
</style>
