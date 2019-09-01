<template>
  <div>
    <Navigation />
    <div>
      <BeerCard
        v-for="item in beers"
        v-bind:key="item.id"
        :id="item.id"
        :name="item.name"
        :tagline="item.tagline"
        :first_brewed="item.first_brewed"
        :abv="item.abv"
        :image="item.image_url"
      />
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from '@/components/Navigation.vue'
import BeerCard from '@/components/BeerCard.vue'

export default {
  name: 'home',
  created () {
    this.$store.dispatch('fetchAll')
  },
  computed: {
    ...mapState({
      beers: state => state.beers.beers
    })
  },
  components: {
    Navigation,
    BeerCard
  }
}
</script>
