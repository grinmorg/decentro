<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems.slice(0, listItems.length - 1)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="$emit('select-menu', 'appearance')"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        :label="listItems[listItems.length - 1].label"
        :with-sub-menu="listItems[listItems.length - 1].withSubMenu"
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
          label: "Settings",
          icon: "cog",
          withSubMenu: true,
        },
        {
          label: "Help",
          icon: "questionMarkCircle",
          withSubMenu: false,
        },
        {
          label: "Keyboard shortcuts",
          icon: "calculator",
          withSubMenu: false,
        },
        {
          label: "Restricted Mode: Off",
          icon: null,
          withSubMenu: true,
        },
      ],
    }
  },
};
</script>

<style></style>
