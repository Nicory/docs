<template>
  <div class="doc-warn" ref="docWarnContent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  async mounted(){
    console.log(this.$children);
  },
  computed: {
    window: () => window,
    console: () => console
  },
  name: 'docWarn'
}
</script>
