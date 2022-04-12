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
        :active="themeId === selectedOptions.themeId"
        @click="selectOption(themeId)"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  props: ['selectedOptions'],
  emits: [
    'select-menu', 
    'select-option'
  ],
  components: {
    DropdownSettingsListItem,
    DropdownSettingsHeader
  },
  data() {
    return {
      themes: ["Use device theme", "Light theme", "Dark theme"], // все темы
    };
  },

  methods: {
    selectOption (themeId) {
      this.$emit('select-option', { name: 'themeId', value: themeId })
    }
  }
};
</script>

<style></style>
