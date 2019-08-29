<template>
  <div>
    <Search />
    {{beers}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  created() {
    this.$store.dispatch('fetchAll')
  },
  computed:{
    ...mapState({
      beers: state => state.beers.beers,
    })
  },
  components: {
    Search
  }
}
</script>
