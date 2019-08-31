<template>
  <div v-if="beer">
    <img :src="beer.image_url" />
    <div>
      <p> {{ beer.name }} </p>
      <p> {{ beer.description }} </p>
      <table>
       <colgroup span="2"></colgroup>
       <tr
          v-for="(item) in ingredients"
          v-bind:key="item[0]"> <td>{{ item[0] }}</td> <td>{{ item[1] }}</td>
        </tr>
       
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'detail',
  created () {
    if (this.allBeers.length === 0) this.fetchResults()
  },
  methods: {
    fetchResults: function () {
      const searchParam = this.$route.params.beerName.replace(' ', '_')
      this.$store.dispatch('fetchBeersByName', searchParam)
    }
  },
  computed: {
    ...mapGetters(['allBeers']),
    beer () {
      return this.$store.getters.beerById(parseInt(this.$route.params.id))
    },
    ingredients: function() {
      return this.beer.ingredients.map(s => [s.name, s.list.join(',')])
    }
  }
}
</script>
