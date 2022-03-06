<template>
  <div
          class="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0"
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
</template>

<script>
import DropdownAppListItem from './DropdownAppListItem.vue';

export default {
  components: {
    DropdownAppListItem
  }
}
</script>

<style>

</style>