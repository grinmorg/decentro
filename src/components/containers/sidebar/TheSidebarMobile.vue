<template>
  <TheSidebarMobileOverlay>
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button class="ml-2 mr-6 focus:outline-none">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </section>
      <SidebarContent />
    </aside>
  </TheSidebarMobileOverlay>
</template>

<script>
import SidebarContent from "./SidebarContent.vue";
import TheSidebarMobileOverlay from "./TheSidebarMobileOverlay.vue";
import LogoMain from "../../atoms/LogoMain.vue";
import BaseIcon from "../../atoms/base/BaseIcon.vue";

export default {
  components: {
    SidebarContent,
    LogoMain,
    BaseIcon,
    TheSidebarMobileOverlay
  },
};
</script>

<style></style>
