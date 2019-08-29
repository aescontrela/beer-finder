<template>
  <div>
    <BaseInput v-if="show" type="search" placeholder="Fancy a beer..." :value.sync="query" />
    <button @click="toggleVisibility">close</button>
  </div>
</template>
<script>
import BaseInput from '@/components/BaseInput.vue'
import debounce from 'lodash/debounce'

export default {
  data: function () {
    return {
      query: '',
      show: false,
      results: []
    }
  },
  watch: {
    query: function () {
      this.debounceSearchQuery()
    }
  },
  created: function () {
    this.debounceSearchQuery = debounce(this.fetchResults, 1000)
  },
  methods: {
    toggleVisibility: function () {
      this.show = !this.show
    },
    fetchResults: function(){
      const searchParam = this.query.replace(' ', '_')
      this.$store.dispatch('fetchBeersByName', searchParam)
    }
  },
  components: {
    BaseInput
  }
}

</script>
<style></style>
