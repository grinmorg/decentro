<template>
  <li>
    <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <BaseIcon
        v-if="isIconShown"
        :name="iconName"
        class="w-5 h-5 mr-3 text-gray-400"
      />
      <span class="truncate flex-1" :class="{ 'ml-8': icon && !isIconShown }">{{
        label
      }}</span>
      <BaseIcon
        v-if="withSubMenu"
        name="chevronRight"
        class="w-5 h-5 text-gray-400 ml-auto"
      />
    </a>
  </li>
</template>

<script>
import BaseIcon from "./base/BaseIcon.vue";

export default {
  props: {
    active: Boolean,
    label: String,
    withSubMenu: Boolean,
    icon: {
      type: String,
      default: "check",
    },
  },
  components: {
    BaseIcon,
  },
  computed: {
    isIconShown() {
      return this.active || (this.icon !== "check" && this.icon !== null);
      // Вернёт true только в том случае если свойство active === true или если icon !== "check" или null
    },
    iconName() {
      return this.active ? "check" : this.icon;
    },
  },
};
</script>

<style></style>
