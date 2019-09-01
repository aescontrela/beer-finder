<template>
  <div class="detail">
    <div v-if="beer" class="detail--container">
      <img :src="beer.image_url" />
      <div class="detail--container--heading">
        <h2> {{ beer.name }} </h2>
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
  </div>
</template>

<script>
export default {
  name: 'BeerDetail',
  props: {
    beer: {
      validator: (value) =>
        value.hasOwnProperty('name') &&
        value.hasOwnProperty('description') &&
        value.hasOwnProperty('ingredients')
    }
  },
  computed: {
    ingredients: function () {
      return this.beer.ingredients.map(s => [s.name, s.list.join(', ')])
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles.styl'

  .detail--container
    background-color $blackoverlay
    height calc(100vh - 55px)
    color $white
    font-family $primary
    display grid
    grid-template-columns auto 60%
    grid-template-rows auto
    align-items center
    justify-content center
    padding-left 5em
    padding-right 5em
    overflow scroll

    img
      height 320px
      object-fit contain
      filter invert(1)

    .detail--container--heading
      padding-left 3em

      h2
        font-size 2em

      p
        font-size 1.2em
        padding-bottom 2em

    table
      border-collapse: collapse;
      width: 90%;
      tr
        td:first-of-type
          font-weight bold
          text-transform uppercase
          width 5em

      tr 
        width 4em
        border-bottom 1px solid $black
        height 3em

  @media (max-width 720px)
    .detail--container
      grid-template-columns 90%
      padding 2em
   
      img
        height 220px
      
      .detail--container--heading
        padding-left 0 
        padding-top 3em 

</style>