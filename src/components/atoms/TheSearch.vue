<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput v-model:query="query" :has-results="results.length" @changeState="toggleSearchResults" />
      <TheSearchResults v-show="isSearchResultsShown" :results="results" />
    </div>
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'
export default {
  components: {
    TheSearchInput,
    TheSearchButton,
    TheSearchResults
  },
  emits: [
    'update-search-query'
  ],
  props: [
    'searchQuery'
  ],
  data() {
    return {
      query: this.searchQuery,
      isSearchResultsShown: false,
      keywords: [
        'new york giants',
        'new york alicia keys',
        'new york giants vs washington football',
        'new york',
        'new york song',
        'new york new york frank sinatra',
        'new york jets',
        'new york city',
        'new york giants live',
        'new york state of mind',
        'new york giants vs washington football live',
        'new york giants injury',
        'new york giants live stream',
        'new york accent'
      ]
    }
  },
  methods: {
    toggleSearchResults(isSearchInputActive) {
      this.isSearchResultsShown = isSearchInputActive && this.results.length;
    }
  },
  computed: {
    results() {
      if (!this.query) {
        return []
      }

      // фильтрую и возвращаю только значения которые включают query запрос
      return this.keywords.filter(result => {
        return result.includes(this.trimmedQuery);
      })
    },
    trimmedQuery() {
      return this.query.replace(/\s+/g, ' ').trim()
    },
  },
  watch: {
    query(query) {
      this.$emit('update-search-query', query);
    }
  }

};
</script>

<style>
</style>
