<template>
  <div
    class="z-10 bg-white fixed h-14 p-3 w-full flex items-center"
  >
    <BaseTooltip text="Back" right>
      <BaseIcon name="arrowLeft" class="w-5 h-5 mr-2" />
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
import TheSearch from './TheSearch.vue';

export default {
  components: {
    TheSearch
  }
};
</script>

<style></style>
