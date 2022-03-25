<template>
  <section class="flex border-b border-gray-200 text-black">
    <button @click.stop="$emit('select-menu', 'main')" class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" />
    </button>
    <span class="py-3">Appearance</span>
  </section>
  <section class="py-2 border-b">
    <div class="text-gray-500 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="(theme, themeId) in themes"
        :key="themeId"
        :label="theme"
        :active="themeId === selectedThemeId"
        @click="selectedThemeId = themeId"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

export default {
  emits: [
    'select-menu'
  ],
  components: {
    DropdownSettingsListItem,
  },
  data() {
    return {
      selectedThemeId: 0, // id выбранной темы
      themes: ["Use device theme", "Light theme", "Dark theme"], // все темы
    };
  },
};
</script>

<style></style>
