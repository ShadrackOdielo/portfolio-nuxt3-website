<script setup>
//const
const { timeline } = useConstants();
useHead({
  title: "Web Developer Portfolio | Career Journey",
  meta: [
    {
      property: "og:title",
      content: "Web Developer Portfolio | Career Journey",
    },
    {
      property: "og:site_name",
      content: "Web Developer Portfolio | Career Journey",
    },
    {
      property: "og:site",
      content: "https://www.shadrackodielo.me/timeline",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default"
    ><TimelineSection :timeline="timeline"
  /></NuxtLayout>
</template>
