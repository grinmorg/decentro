<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems.slice(0, listItems.length - 1)"
        :key="listItem.id"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="$emit('select-menu', listItem.id)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        :label="listItems[listItems.length - 1].label"
        :icon="listItems[listItems.length - 1].icon"
        :with-sub-menu="listItems[listItems.length - 1].withSubMenu"
        @click.stop="$emit('select-menu', listItems[listItems.length - 1].id)"
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
      listItems: [
        {
          id: 'appearance',
          label: "Appearance: Light",
          icon: "sun",
          withSubMenu: true,
        },
        {
          id: 'language',
          label: "Language",
          icon: "translate",
          withSubMenu: true,
        },
        {
          id: 'settings',
          label: "Settings",
          icon: "cog",
          withSubMenu: false,
        },
        {
          id: 'help',
          label: "Help",
          icon: "questionMarkCircle",
          withSubMenu: false,
        },
        {
          id: 'keyboard_shortcuts',
          label: "Keyboard shortcuts",
          icon: "calculator",
          withSubMenu: false,
        },
        {
          id: 'restricted_mode',
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
