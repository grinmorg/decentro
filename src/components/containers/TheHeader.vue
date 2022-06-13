<template>
  <header :class="classes">
    <div :class="[
      'lg:w-1/4',
      'flex',
      isMobileSearchShown ? 'opacity-0' : 'opacity-100',
    ]">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button @click="$emit('toggleSidebar')" class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchMobile v-if="isMobileSearchShown" @close="closeMobileSearch">
      <TheSearch :search-query="searchQuery" @update-search-query="searchQuery = $event" />
    </TheSearchMobile>
    <TheSearchMain v-else>
      <TheSearch :search-query="searchQuery" @update-search-query="searchQuery = $event" />
    </TheSearchMain>
    <div :class="[
      'flex',
      'items-center',
      'justify-end',
      'lg:w-1/4',
      'sm:space-x-3',
      'p-2',
      'sm:px-4',
      isMobileSearchShown ? 'opacity-0' : 'opacity-100',
    ]">
      <BaseTooltip text="Voice searching">
        <button class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>

      <BaseTooltip text="Search">
        <button @click.stop="isMobileSearchActive = true" class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>

      <TheDropdownApps />
      <TheDropdownSettings />
      <ButtonLogin />
    </div>
  </header>
</template>

<script>
import { defineAsyncComponent } from "vue";

import TheDropdownApps from "../atoms/TheDropdownApps.vue";
import TheDropdownSettings from "../atoms/TheDropdownSettings.vue";
import LogoMain from "../atoms/LogoMain.vue";
import TheSearch from "../atoms/TheSearch.vue";
import ButtonLogin from "../atoms/ButtonLogin.vue";
import TheSearchMain from "../atoms/TheSearchMain.vue";

export default {
  emits: {
    openMobileSidebar: null,
  },

  components: {
    TheDropdownApps,
    TheDropdownSettings,
    LogoMain,
    TheSearch,
    TheSearchMobile: defineAsyncComponent(() =>
      import("../atoms/TheSearchMobile.vue")
    ),
    ButtonLogin,
    TheSearchMain
  },

  data() {
    return {
      searchQuery: "",
      isSmallScreen: false,
      isMobileSearchActive: false,
      classes: [
        "flex",
        "justify-between",
        "w-full",
        "bg-white",
        "bg-opacity-95",
      ],
    };
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.isSmallScreen = true;
        return;
      }
      this.closeMobileSearch();
      this.isSmallScreen = false;
    },
    closeMobileSearch() {
      this.isMobileSearchActive = false;
    },
  },

  computed: {
    isMobileSearchShown() {
      return this.isSmallScreen && this.isMobileSearchActive;
    },
  },
};
</script>

<style>
</style>
