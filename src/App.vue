<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <TheSidebarCompact v-if="isCompactSidebarOpen" />
  <TheSidebar v-if="isSidebarOpen" />
  <TheSidebarMobile
    :is-open="isMobileSidebarOpen"
    @close="closeMobileSidebar"
  />
  <TheCategories :is-sidebar-open="isSidebarOpen" />
  <TheVideos :is-sidebar-open="isSidebarOpen" />
</template>

<script>
import TheHeader from "./components/containers/TheHeader.vue";
import TheSidebar from "./components/containers/sidebar/TheSidebar.vue";
import TheSidebarCompact from "./components/containers/sidebar/TheSidebarCompact.vue";
import TheSidebarMobile from "./components/containers/sidebar/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/video/TheVideos.vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheSidebarCompact,
    TheSidebarMobile,
    TheCategories,
    TheVideos,
  },
  data() {
    return {
      isCompactSidebarActive: false,
      isCompactSidebarOpen: false,
      isMobileSidebarOpen: false,
      isSidebarOpen: false,
    };
  },
  mounted() {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.isCompactSidebarActive = true;
    }
    if (window.innerWidth >= 1280) {
      this.isCompactSidebarActive = false;
    }
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isCompactSidebarOpen = false;
        this.isSidebarOpen = false;
      } else if (window.innerWidth < 1280) {
        this.isCompactSidebarOpen = true;
        this.isSidebarOpen = false;
      } else {
        this.isCompactSidebarOpen = this.isCompactSidebarActive;
        this.isSidebarOpen = !this.isCompactSidebarActive;
        this.isMobileSidebarOpen = false;
      }
    },
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.isCompactSidebarActive = !this.isCompactSidebarActive;
        this.onResize();
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
