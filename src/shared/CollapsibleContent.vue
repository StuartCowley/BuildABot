<template>
  <div>
      <div class="header" @click="open = !open">
          <span v-if="open" >Collapse</span>
          <span v-if="!open" >Expand</span>
      </div>
      <slot v-if="open">
      </slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
           open: true
        }
    }
}
</script>

<style lang="scss" scoped>

.header
{
    width: 100%;
    background-color: grey;
    cursor: pointer;
}

span
{
    display: block;
    background-color: grey;
    padding: 3px;
    text-align: center;
}
</style>