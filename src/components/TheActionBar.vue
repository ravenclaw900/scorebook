<template>
  <div id="actionBar">
    <ActionItem name="Ball" />
    <ActionItem name="Strike" />
    <ActionItem name="Hit by pitch" />
    <ActionItem name="Single" />
    <ActionItem name="Double" />
    <ActionItem name="Triple" />
    <ActionItem name="Out" />
    <ActionItem name="Error" />
    <ActionItem name="Foul" />
  </div>
</template>

<script>
import ActionItem from "@/components/ActionItem.vue";
export default {
  components: {
    ActionItem,
  },
};
</script>

<style lang="scss" scoped>
#actionBar {
  background-color: rgb(212, 212, 212);
  height: 63px;
  display: flex;
  justify-content: space-around;
}
</style>
