<template>
  <div class="search--box">
    <button @click="toggleVisibility"><img src="@/assets/images/ico_search.svg" alt="search icon"></button>
    <BaseInput v-if="show" type="search" placeholder="Fancy a beer..." :value.sync="query" />
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
    fetchResults: function () {
      this.$store.dispatch('searchBeers', encodeURIComponent(this.query))
    }
  },
  components: {
    BaseInput
  }
}

</script>

<style lang="stylus">
@import '../assets/styles.styl'

  .search--box
    display flex
    align-items center

    input
      width calc(100vw - 8em)
      padding .3em
      margin-left 5px

  @media (max-width 720px)
    .search--box input
      width calc(100vw - 6em)

</style>
