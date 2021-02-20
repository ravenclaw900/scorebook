<template>
  <button class="actionItem">
    <img :src="require(`@/assets/${fileName}.png`)" />
    <br />
    {{ name }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: { type: String, required: true },
  },
  computed: {
    fileName(): string {
      return this.$props.name.toLowerCase().replace(/\s/g, "-");
    },
  },
});
</script>

<style lang="scss" scoped>
.actionItem {
  height: 100%;
  width: 90px;
  font-size: small;
  text-align: center;
  background-color: transparent;
  border: none;
  img:active {
    opacity: 0.6;
  }
}
</style>
