<template>
  <div>
    <Search />
    <BaseDropdown :options="sortingOptions"/>
  </div>
</template>

<script>
import BaseDropdown from '@/components/BaseDropdown.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Navigation',
  data: function () {
    return {
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
  components:{
    BaseDropdown,
    Search
  }
}
</script>

<style></style>
