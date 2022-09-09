<template>
  <main class="pb-3">
    <img src="/img/icons/kotakit-192x192.png" width="90" class="float-left mr-3 rounded" />
    <h2 class="mb-0 text-4xl text-white">{{ title }}</h2>
    <span class="text-lg">{{ description }}</span>
  </main>
</template>

<script>
export default {
  props: {
    description: String,
    title: String
  },
  name: "Header"
};
</script>

<style></style>
