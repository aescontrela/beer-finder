<template>
  <div>
    <nav class="navigation navigation--left" v-if="isDetail">
      <button @click="goBack"><img src="@/assets/images/ico_back.svg" alt="navigate back icon"></button>
    </nav>
    <nav class="navigation navigation--right" v-else>
      <Search />
      <BaseDropdown v-if="!isDetail" :options="sortingOptions"/>
    </nav>
  </div>
</template>

<script>
import BaseDropdown from '@/components/BaseDropdown.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Navigation',
  data: function () {
    return {
      isDetail: this.$route.name === 'detail',
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
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  },
  components: {
    BaseDropdown,
    Search
  }
}
</script>

<style lang="stylus">
  @import '../assets/styles.styl'

  .navigation
    display flex
    padding 1em
    font-family: $primary
    color: $black
    background-color $whitesmoke
    box-shadow 1px 1px 7px $black

    .ui__dropdown ul
      top calc(100vh - (100vh - 3.8em))
      right 1em

    button
      background-color transparent
      outline none
      cursor pointer
      border-radius 3px;
      padding 0

      img
        width 20px

  .navigation--left
    justify-content flex-start

  .navigation--right
    justify-content flex-end

  @media (max-width 720px)
    .navigation
      padding .5em

</style>
