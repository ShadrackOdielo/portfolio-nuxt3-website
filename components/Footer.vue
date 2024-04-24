<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- nav - start -->
        <!-- <nav>
          <NuxtLink
            v-for="item in navigation"
            :key="item.id"
            :href="item.href"
            class="footerBtn"
            >{{ item.name }}</NuxtLink
          >
        </nav> -->
        <!-- nav - end -->

        <!-- social - start -->
        <div>
          <a href="https://twitter.com/odielo_ke" aria-label="Twitter" target="_blank" class="footerIcon">
            <IconsTwitterIcon />
          </a>
          <a href="https://www.linkedin.com/in/shadrack-odielo-30258a212/" aria-label="Linkden" target="_blank" class="footerIcon">
            <IconsLinkedInIcon />
          </a>

          <a href="https://github.com/shadrackodielo" aria-label="Github" target="_blank" class="footerIcon">
            <IconsGithubIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present Shadrack Odielo. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
// utils and hooks
const { navigation } = useConstants();
const CURRENT_YEAR = new Date().getFullYear();
</script>
