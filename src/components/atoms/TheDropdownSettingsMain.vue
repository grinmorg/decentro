<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="menuItem in menuItems.slice(0, menuItems.length - 1)"
        :key="menuItem.id"
        :label="menuItem.label"
        :icon="menuItem.icon"
        :with-sub-menu="menuItem.withSubMenu"
        @click.stop="selectMenu(menuItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        :label="menuItems[menuItems.length - 1].label"
        :icon="menuItems[menuItems.length - 1].icon"
        :with-sub-menu="menuItems[menuItems.length - 1].withSubMenu"
        @click.stop="selectMenu(menuItems[menuItems.length - 1])"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

export default {
  emits: ["select-menu"],
  components: {
    DropdownSettingsListItem,
  },
  props: ["menuItems"],
  emits: ["select-menu"],
  data() {
    return {
      
    };
  },
  methods: {
    selectMenu(menuItem) {
      if (menuItem.withSubMenu) {
        this.$emit("select-menu", menuItem);
      }
    },
  },
};
</script>

<style></style>
