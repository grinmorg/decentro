<template>
  <DropdownSettingsHeader title="Appearance" @back="$emit('select-menu', 'main')" />
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="(themeName, themeId) in themes"
        :key="themeId"
        :label="themeName"
        :active="themeId === selectedThemeId"
        @click="selectedThemeId = themeId"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  emits: [
    'select-menu'
  ],
  components: {
    DropdownSettingsListItem,
    DropdownSettingsHeader
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
