<script setup>
//const
const { hobbies } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://shadrackodielo.me/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <TextLeftImgRight />
    <HobbySection :hobbies="hobbies" />
  </NuxtLayout>
</template>
