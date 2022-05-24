<template>
  <DropdownSettingsHeader title="Безопасный режим" @back="$emit('close')" />
  <section class="px-3 py-4 space-y-4 text-black text-sm">
    <p>
      Данный режим позваляет скрыть весь контент для взрослых.
    </p>
    <p>Данные настройки будут сохранены в браузере.</p>
    <div class="text-gray-600 font-semibold flex items-center">
      <span class="uppercase mr-2">Активировать режим</span>
      <input type="checkbox" :checked="selectedOptions.restrictedMode.enabled" @input="selectOption" />
    </div>
    <template v-if="selectedOptions.restrictedMode.enabled">
      <p>Вы активировали безопасный режим, часть контента не будет отображена.</p>
    </template>
  </section>
</template>

<script>
import dropdownSubmenu from '../../mixins/dropdownSubmenu'

export default {
  mixins: [dropdownSubmenu],
  methods: {
    selectOption($event) {
      const enabled = $event.target.checked
      const value = { enabled, text: enabled ? "ON" : "OFF" }

      this.$emit("select-option", {
        name: "restrictedMode",
        value,
      });
    },
  },
};
</script>
