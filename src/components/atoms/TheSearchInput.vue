<template>
  <div class="relative w-full">
    <input type="text" placeholder="Search" ref="input" :class="classes" :value="query"
      @input="updateQuery($event.target.value)" @focus="setState(true)" @blur="setState(false)" @click="setState(true)"
      @keyup.esc="handleEsc" />

    <button v-show="query" @click="clear" class="absolute top-0 right-0 h-full px-3 focus:outline-none">
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
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
  props: ['query', 'hasResults'],
  emits: ['update:query', 'change-state'],
  mounted() {
    if (window.innerWidth < 640) {
      this.$refs.input.focus();
    }

    document.addEventListener( 'keydown', this.onKeydown );
  },
  beforeUnmount() {
    document.removeEventListener( 'keydown', this.onKeydown );
  },
  methods: {
    onKeydown(event) {
      const isInputFocused = this.$refs.input === document.activeElement

      if (event.code === 'Slash' && !isInputFocused) {
        // если была нажата клавиша слешь и нету фокуса на инпуте
        event.preventDefault();
        
        this.$refs.input.focus();
      }
    },  
    updateQuery(query) {
      this.$emit('update:query', query)
      this.setState(this.isActive);
    },
    setState(isActive) {
      this.isActive = isActive;

      this.$emit('change-state', isActive)
    },
    handleEsc() {
      this.removeSelection()
      if (this.isActive && this.hasResults) {
        this.setState(false)
      } else {
        this.$refs.input.blur()
      }
    },
    removeSelection() {
      const end = this.$refs.input.value.length
      this.$refs.input.setSelectionRange(end, end) // убирает выделение текста
    },
    clear() {
      this.$refs.input.focus();

      this.updateQuery('');
    }
  }
};
</script>

<style>
</style>
