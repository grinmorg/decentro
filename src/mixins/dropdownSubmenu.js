import DropdownSettingsListItem from "../components/atoms/DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "../components/atoms/DropdownSettingsHeader.vue";

export default {
  props: ["selectedOptions"],
  emits: ["close", "select-option"],
  components: {
    DropdownSettingsListItem,
    DropdownSettingsHeader,
  },

  data() {
    return {
      optionName: null
    }
  },

  methods: {
    selectOption(option) {
      this.$emit("select-option", { name: this.optionName, value: option });
    },
  },
};
