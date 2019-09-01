<template>
  <div class="ui__dropdown">
    <button @click="toggleVisibility"><img src="@/assets/images/ico_sort.svg" alt="sort icon"></button>
    <ul v-if="show">
        <li
          v-for="item in options"
          v-bind:key="item.label"
          @click="sort(item)"> {{ item.label }}</li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BaseDropdown',
  data: function () {
    return {
      show: false
    }
  },
  props: {
    options: {
      validator: (value) =>
        value.every(item =>
          item.hasOwnProperty('attr') &&
          item.hasOwnProperty('type') &&
          item.hasOwnProperty('label'))
    }
  },
  methods: {
    ...mapActions(['sortBy']),
    toggleVisibility: function () {
      this.show = !this.show
    },
    sort: function (item) {
      this.sortBy([item.attr, item.type])
      this.show = !this.show
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles.styl'

    div
      margin 5px

    ul
      position absolute
      background-color $white
      width 25ch
      box-shadow: 0px 2px 3px $black;
      border-radius 3px;
      font-size .9em
      padding .5em

    li
      cursor pointer
      border-bottom 1px solid $lightgray
      line-height 1.5em
      padding-top .2em
      font-weight bold

      &:last-of-type
        border none

</style>
