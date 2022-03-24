<template>
  <div class="absolute z-10 p-2 w-full flex items-center">
    <BaseTooltip text="Back" right>
    <button class="mr-2 p-2 focus:outline-none" @click="$emit('close')">
      <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Voice searching" left>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script>
import TheSearch from "./TheSearch.vue";

export default {
  emit: {
    close: null,
  },
  components: {
    TheSearch,
  },
  mounted() {
    window.addEventListener("click", this.onClick);
  },

  beforeUnmount() {
    window.removeEventListener("click", this.onClick);
  },

  methods: {
    onClick(event) {
      if (!this.$el.contains(event.target)) {
        // если корневой элемент компонента НЕ содержит тот элемент по которому тыкнули, можно закрывать
        this.$emit("close");
      }
    },
  },
};
</script>

<style></style>
