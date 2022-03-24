<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

export default {
  components: {
    DropdownSettingsListItem,
  },
  data() {
    return {
      listItems: [
        {
          label: "Use device theme",
        },
        {
          label: "Light theme",
        },
        {
          label: "Dark theme",
        },
      ],
    };
  },
};
</script>

<style></style>
