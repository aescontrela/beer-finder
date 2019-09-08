<template>
  <div class="card">
    <a :href="linkTo">
      <div class="card--image"><img :src="image" /></div>
      <div class="card--contents">
        <h2> {{ name }} </h2>
        <p> {{ tagline }} </p>
        <p> First Brewed at {{ brewedDate }} </p>
        <p> {{ abv }} ABV </p>
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
      const nameParam = encodeURIComponent(this.name)
      return `#/beer/${this.id}/${nameParam}`
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles.styl'

  .card
    font-family: $primary
    width 25em
    margin: .5em;

  .card a
    display grid
    grid-template-columns 3em auto
    grid-template-rows auto
    background-color $lightergray
    align-items center
    padding 1em
    color $mediumgray

    img
      height 120px
      object-fit contain
      filter grayscale(0.8)

  .card--contents
    margin-left 1em
    font-size 0.9em
    color: #96847d

    p
      color $mediumbrown
    h2
      font-size 1.2em
      font-weight bold
      color $darkbrown

  @media (max-width 720px)
    .card
      width 90%

</style>
