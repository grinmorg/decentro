<template>
  <DropdownSettingsHeader title="Тема" @back="$emit('select-menu', 'main')" />
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">
      Настройки сохранятся в вашем браузере
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="(themeName, themeId) in themes"
        :key="themeId"
        :label="themeName"
        :active="themeId === selectedOptions.theme.id"
        @click="selectOption({ id: themeId, text: themeName })"
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
      themes: ["Светлая тема", "Тёмная тема"], // все темы
    };
  },

  methods: {
    selectOption (theme) {
      this.$emit('select-option', { name: 'theme', value: theme })
    }
  }
};
</script>

<style></style>
