<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button class="relative p-2 focus:outline-none">
        <BaseIcon @click="toggle" name="dotsVertical" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        ref="dropdown"
        @keydown.esc="close"
        tabindex="-1"
        :class="dropdownClasses"
      >
        <TheDropdownSettingsMain
          v-if="selectedMenu === 'main'"
          @select-menu="showSelectedMenu"
        />
        <TheDropdownSettingsAppearance
          v-else-if="selectedMenu === 'appearance'"
          @select-menu="showSelectedMenu"
        />
        <TheDropdownSettingsLanguage
          v-else-if="selectedMenu === 'language'"
          @select-menu="showSelectedMenu"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import TheDropdownSettingsMain from "./TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearance from "./TheDropdownSettingsAppearance.vue";
import TheDropdownSettingsLanguage from "./TheDropdownSettingsLanguage.vue";

export default {
  components: {
    TheDropdownSettingsMain,
    TheDropdownSettingsAppearance,
    TheDropdownSettingsLanguage
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.close();
      }
    });
  },
  data() {
    return {
      isOpen: false,
      selectedMenu: "main",
      dropdownClasses: [
        "z-10",
        "absolute",
        "top-9",
        "-right-full",
        "sm:right-0",
        "bg-white",
        "w-72",
        "border",
        "border-t-0",
        "focus:outline-none",
      ],
    };
  },
  computed() {},
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus()); // if isOpen return true, then the expression will be executed
    },
  },
  methods: {
    showSelectedMenu(selectedMenu) {
      this.selectedMenu = selectedMenu;
      this.$refs.dropdown.focus();
    },
    close() {
      this.isOpen = false;
      setTimeout(() => (this.selectedMenu = "main"), 100);
    },
    open() {
      this.isOpen = true;
    },
    toggle() {
      this.isOpen ? this.close() : this.open();
    },
  },
};
</script>

<style></style>
