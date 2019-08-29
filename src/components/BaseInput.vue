<template>
  <div>
    <input
      v-bind="$attrs"
      autocomplete="false"
      @input="$emit('update:value', $event.target.value )"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: String
  }
}
</script>

<style></style>
