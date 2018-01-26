<template>
  <v-footer :fixed="this.$store.state.layout.fixed" app>
    <span>&copy; 2017</span>
    <slot></slot>
  </v-footer>
</template>

<script>
  export default {
    name: 'layout-logged-footer',
  };
</script>
