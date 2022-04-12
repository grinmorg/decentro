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
        :active="languageId === selectedOptions.languageId"
        @click="selectOption(languageId)"
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
      languages: ["English", "Russian"], // все языки
    };
  },
  methods: {
    selectOption(languageId) {
      this.$emit("select-option", { name: "languageId", value: languageId });
    },
  },
};
</script>

<style></style>
