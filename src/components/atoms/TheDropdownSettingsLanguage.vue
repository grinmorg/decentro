<template>
  <DropdownSettingsHeader
    title="Choose your language"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(language, languageId) in languages"
        :key="languageId"
        :label="language"
        :active="languageId === selectedLanguageId"
        @click="selectedLanguageId = languageId"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  emits: ["select-menu"],
  components: {
    DropdownSettingsListItem,
    DropdownSettingsHeader,
  },
  data() {
    return {
      selectedLanguageId: 0, // id выбраннго языка
      languages: ["English", "Russian"], // все языки
    };
  },
};
</script>

<style></style>
