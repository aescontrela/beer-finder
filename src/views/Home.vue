<template>
  <div>
    <Navigation />
    <div class="list">
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
    window.addEventListener('scroll', this.handleLoad)
    this.$store.dispatch('fetchByPage')
  },
  computed: {
    ...mapState({
      beers: state => state.beers.beers
    })
  },
  methods: {
    handleLoad: function () {
      const canScroll = window.scrollY + window.innerHeight >= window.document.body.scrollHeight

      if (canScroll) {
        this.$store.dispatch('fetchByPage')
      }
    }
  },
  components: {
    Navigation,
    BeerCard
  }
}
</script>

<style lang="stylus">
  .list
    display flex
    flex-wrap wrap
    padding: 3em 1em
    justify-content center

</style>
