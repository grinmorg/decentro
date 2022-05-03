<template>
  <DropdownSettingsHeader
    title="Выбирите нужный язык"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(languageName, languageId) in languages"
        :key="languageId"
        :label="languageName"
        :active="languageId === selectedOptions.language.id"
        @click="selectOption({ id: languageId,  text: languageName})"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  props: ["selectedOptions"],
  emits: ["select-menu", "select-option"],
  components: {
    DropdownSettingsListItem,
    DropdownSettingsHeader,
  },
  data() {
    return {
      languages: ["English", "Русский"], // все языки
    };
  },
  methods: {
    selectOption(language) {
      this.$emit("select-option", { name: "language", value: language });
    },
  },
};
</script>

<style></style>
