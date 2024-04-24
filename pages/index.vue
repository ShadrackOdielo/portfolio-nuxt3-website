<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web Developer Portfolio | Po Yi Zhi",
  author: {
    "@type": "Person",
    "@id": "#poyizhi",
  },
  url: "https://www.shadrackodielo.me/",
  description:
    "Personal Portfolio Website. Hi, I am Po Yi Zhi. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Po Yi Zhi, Yi Zhi, shadrackodielo, Malaysia",
  image: "https://www.shadrackodielo.me/profile-pics/avatar.jpg",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#shadrackodielo",
  name: "Shadrack  Odielo",
  email: "shadrackodielo@gmail.com",
  url: "https://www.shadrackodielo.me/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
