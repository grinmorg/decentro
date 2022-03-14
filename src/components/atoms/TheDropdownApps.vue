<template>
  <div class="relative">
    <button class="relative group p-2 focus:outline-none">
      <BaseIcon @click="isOpen = !isOpen" name="viewGrid" class="w-5 h-5" />
    </button>
    
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
    <div
      v-show="isOpen"
      class="absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0"
    >
      <section class="py-2 border-b">
        <ul>
          <DropdownAppListItem label="Decentro streams" />
        </ul>
      </section>
      <section class="py-2 border-b">
        <ul>
          <DropdownAppListItem label="Decentro Music" />
          <DropdownAppListItem label="Decentro Kids" />
        </ul>
      </section>
      <section class="py-2">
        <ul>
          <DropdownAppListItem label="Creator Academy" />
          <DropdownAppListItem label="Decentro for Artists" />
        </ul>
      </section>
    </div>
    </transition>
  </div>
</template>

<script>
import DropdownAppListItem from "./DropdownAppListItem.vue";

export default {
  components: {
    DropdownAppListItem,
  },
  data() {
    return {
      isOpen: false
    }
  },

  mounted() {
    window.addEventListener('click', event => {
      if ( !this.$el.contains(event.target) ) {
        this.isOpen = false;
      }
    })
  }
};
</script>

<style></style>
