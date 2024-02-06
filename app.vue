<script lang="ts" setup>
const { locale } = useI18n();

const styleText = computed(() => {
  if (locale.value === "en") {
    return "font-family: Roboto Helvetica, sans-serif !important;";
  } else if (locale.value === "la") {
    return "Noto Sans Lao Looped Helvetica, sans-serif !important;";
  } else {
    return "font-family: 'Roboto';";
  }
});
</script>
<template>
  <NuxtLayout>
    <v-app :style="styleText">
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
