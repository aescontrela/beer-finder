<template>
  <div>
    <Navigation />
    <BeerDetail v-if="beer" :beer="beer" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '@/components/Navigation.vue'
import BeerDetail from '@/components/BeerDetail.vue'

export default {
  name: 'detail',
  created () {
    if (this.allBeers.length === 0) this.fetchResults()
  },
  methods: {
    fetchResults: function () {
      const searchParam = this.$route.params.beerName.replace(' ', '_')
      this.$store.dispatch('fetchBeersByName', searchParam)
    },
    goBack: function () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(['allBeers']),
    beer () {
      return this.$store.getters.beerById(parseInt(this.$route.params.id))
    },
  },
  components: {
    BeerDetail,
    Navigation
  }
}
</script>

<style lang="stylus">
@import '../assets/styles.styl'

</style>