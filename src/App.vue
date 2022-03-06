<template>
  <TheHeader />
  <TheSidebarSmall />
  <TheSidebar />
  <TheSidebarMobile />
  <TheCategories />
  <TheVideos />
</template>

<script>
import TheHeader from './components/containers/TheHeader.vue';
import TheSidebar from './components/containers/sidebar/TheSidebar.vue';
import TheSidebarSmall from './components/containers/sidebar/TheSidebarSmall.vue';
import TheSidebarMobile from './components/containers/sidebar/TheSidebarMobile.vue';
import TheCategories from './components/TheCategories.vue';
import TheVideos from './components/video/TheVideos.vue';

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheSidebarSmall,
    TheSidebarMobile,
    TheCategories,
    TheVideos
  }
}
</script>

<style>

</style>
