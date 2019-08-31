<template>
  <div>
    <Search />
    <ul>
      <li
        v-for="item in sortingOptions"
        v-bind:key="item.label"
        @click="sortBy([item.attr, item.type])"> {{ item.label }}</li>
    </ul>
    <div> {{ beers }} </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  data: function () {
    return {
      sortingOptions: [
        { label: 'First Brewed',
          type: 'date',
          attr: 'first_brewed'
        },
        { label: 'Alcohol by Volume (ABV)',
          type: 'float',
          attr: 'abv'
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('fetchAll')
  },
  methods: {
    ...mapActions(['sortBy'])
  },
  computed: {
    ...mapState({
      beers: state => state.beers.beers
    })
  },
  components: {
    Search
  }
}
</script>
