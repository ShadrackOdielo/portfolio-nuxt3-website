import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Web Developer Portfolio | Shadrack Odielo",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Hello, welcome to my personal website. My name is shadrack odielo and i am a web developer based in Nairobi, Kenya. I specialize in building websites and web applications using modern technologies like Vue.js, Nuxt.js, React.js, Node.js, Express.js, MongoDB, and more.",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Shadrack Odielo" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Po Yi Zhi, Yi Zhi, shadrackodielo, Malaysia",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Shadrack Odielo",
        },
        {
          property: "og:site",
          content: "https://shadrackodielo.me/",
        },
        {
          property: "og:title",
          content: "Web Developer Portfolio | Shadrack Odielo",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Hi, I am Po Yi Zhi. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "https://www.shadrackodielo.me/favicon-bw.png", ///favicon-wb.png
        },
      ],
      link: [{ rel: "icon", href: "/favicon-bw.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss",
            "@nuxt/content",
            "@nuxtjs/color-mode",

  ],extends: "@nuxt-themes/typography",
    colorMode: {
    preference: "dark",
    classSuffix: "",
  },
  content: {
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      // Will be available on both server and client,
    },
  },
});
