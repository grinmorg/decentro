<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button class="relative p-2 focus:outline-none">
        <BaseIcon @click="toggle" name="dotsVertical" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-show="isOpen" ref="dropdown" @keydown.esc="close" tabindex="-1" :class="dropdownClasses">
        <component v-if="selectedMenu" :is="menu" :selected-options="selectedOptions" @select-option="selectOption"
          @close="closeMenu" />

        <TheDropdownSettingsMain v-else :menu-items="menuItems" @select-menu="selectMenu" />

      </div>
    </transition>
  </div>
</template>

<script>
import TheDropdownSettingsMain from "./TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearance from "./TheDropdownSettingsAppearance.vue";
import TheDropdownSettingsLanguage from "./TheDropdownSettingsLanguage.vue";
import TheDropdownSettingsRestrictedMode from "./TheDropdownSettingsRestrictedMode.vue";

export default {
  components: {
    TheDropdownSettingsMain,
    TheDropdownSettingsAppearance,
    TheDropdownSettingsLanguage,
    TheDropdownSettingsRestrictedMode,
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
      selectedMenu: null,
      selectedOptions: {
        theme: {
          id: 0,
          text: 'Светлая тема'
        },
        language: {
          id: 0,
          text: 'English'
        },
        restrictedMode: {
          enabled: false,
          text: 'OFF'
        },
      },
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
  computed: {
    menu() {
      const menuComponentsNames = {
        appearance: "TheDropdownSettingsAppearance",
        language: "TheDropdownSettingsLanguage",
        restricted_mode: "TheDropdownSettingsRestrictedMode",
      };

      return this.selectedMenu !== null ? menuComponentsNames[this.selectedMenu.id] : null;
    },

    menuItems() {
      return [
        {
          id: "appearance",
          label: "Выбрано: " + this.selectedOptions.theme.text,
          icon: "sun",
          withSubMenu: true,
        },
        {
          id: "language",
          label: "Язык " + this.selectedOptions.language.text,
          icon: "translate",
          withSubMenu: true,
        },
        {
          id: "settings",
          label: "Settings",
          icon: "cog",
          withSubMenu: false,
        },
        {
          id: "help",
          label: "Help",
          icon: "questionMarkCircle",
          withSubMenu: false,
        },
        {
          id: "keyboard_shortcuts",
          label: "Keyboard shortcuts",
          icon: "calculator",
          withSubMenu: false,
        },
        {
          id: "restricted_mode",
          label: "Безопасный режим: " + this.selectedOptions.restrictedMode.text,
          icon: null,
          withSubMenu: true,
        },
      ]
    },
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus()); // if isOpen return true, then the expression will be executed
    },
  },
  methods: {
    close() {
      this.isOpen = false;
      setTimeout(() => this.closeMenu, 100);
    },
    selectMenu(menuItem) {
      this.selectedMenu = menuItem;
      this.$refs.dropdown.focus();
    },
    closeMenu() {
      this.selectMenu(null);
    },
    open() {
      this.isOpen = true;
    },
    toggle() {
      this.isOpen ? this.close() : this.open();
    },
    selectOption(option) {
      this.selectedOptions[option.name] = option.value
    },
  },
};
</script>

<style>
</style>
