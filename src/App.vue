<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <TheSidebarSmall :is-open="sidebarState === 'compact'" />
  <TheSidebar :is-open="sidebarState === 'normal'" />
  <TheSidebarMobile
    :is-open="isMobileSidebarOpen"
    @close="closeMobileSidebar"
  />
  <TheCategories :is-sidebar-open="sidebarState === 'normal'" />
  <TheVideos :is-sidebar-open="sidebarState === 'normal'" />
</template>

<script>
import TheHeader from "./components/containers/TheHeader.vue";
import TheSidebar from "./components/containers/sidebar/TheSidebar.vue";
import TheSidebarSmall from "./components/containers/sidebar/TheSidebarSmall.vue";
import TheSidebarMobile from "./components/containers/sidebar/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/video/TheVideos.vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheSidebarSmall,
    TheSidebarMobile,
    TheCategories,
    TheVideos,
  },
  data() {
    return {
      isMobileSidebarOpen: false,
      sidebarState: null
    };
  },
  mounted() {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.sidebarState = "compact";
    }
    if (window.innerWidth >= 1280) {
      this.sidebarState = "normal";
    }
  },
  methods: {
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.sidebarState =
          this.sidebarState === "normal" ? "compact" : "normal";
      } else {
        this.openMobileSidebar();
      }
    },
    openMobileSidebar() {
      this.isMobileSidebarOpen = true;
    },
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false;
    },
  },
};
</script>

<style></style>
