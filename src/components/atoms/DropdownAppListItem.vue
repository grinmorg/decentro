<template>
  <li>
    <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <BaseIcon name="sparkles" class="w-6 h-6 mr-3 text-purple-800 " />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from './base/BaseIcon.vue';

export default {
  props: {
    label: String
  },
  components: {
    BaseIcon
  }
}
</script>

<style></style>
