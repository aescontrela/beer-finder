<template>
  <div>
    <BaseInput type="text" placeholder="Fancy a beer..." :value.sync="searchterm" />
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "home",
  data: function() {
    return {
      searchterm: ""
    };
  },
  components: {
    BaseInput
  }
};
</script>
