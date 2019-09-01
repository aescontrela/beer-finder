<template>
   <ul>
      <li
        v-for="item in options"
        v-bind:key="item.label"
        @click="sortBy([item.attr, item.type])"> {{ item.label }}</li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BaseDropdown',
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
    ...mapActions(['sortBy'])
  }
}
</script>

<style></style>
