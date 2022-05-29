<template>
  <div class="relative w-full">
    <input type="text" placeholder="Search" :class="classes" :value="query" @input="updateQuery($event.target.value)" />

    <button v-show="query" @click="updateQuery('')" class="absolute top-0 right-0 h-full px-3 focus:outline-none">
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        "w-full",
        "h-full",
        "px-3",
        "shadow-inner",
        "rounded-bl-sm",
        "rounded-tl-sm",
        "border",
        "border-gray-300",
        "focus:border-blue-700",
        "focus:outline-none",
      ],
    };
  },
  props: ['query'],
  emits: ['update:query'],
  mounted() {
    if (window.innerWidth < 640) {
      this.$el.focus();
    }
  },
  methods: {
    updateQuery(query) {
      this.$emit('update:query', query)
    }
  }
};
</script>

<style>
</style>
