<template>
  <div>
    <a :href="linkTo">
      <img :src="image" />
      <div>
        <p> {{ name }} </p>
        <p> {{ tagline }} </p>
        <p> ABV: {{ abv }} </p>
        <p> First Brewed: {{ brewedDate }} </p>
      </div>
    </a>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BeerCard',
  props: {
    id: Number,
    name: String,
    tagline: String,
    first_brewed: Object,
    abv: Number,
    image: String
  },
  computed: {
    brewedDate: function () {
      return moment(this.first_brewed).format('MM/YYYY')
    },
    linkTo: function () {
      const nameParam = this.name.replace(' ', '_')
      return `#/beer/${this.id}/${nameParam}`
    }
  }
}
</script>

<style></style>
