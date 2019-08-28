<template>
  <input v-bind="$attrs" autocomplete="false" @input="$emit('update:value', $event.target.value )" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: String
  }
};
</script>

<style></style>