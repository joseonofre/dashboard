<template>
  <v-navigation-drawer
    fixed
    :mini-variant="this.$store.state.layout.miniVariant"
    :clipped="this.$store.state.layout.clipped"
    v-model="compToggleNavLeft"
    app
  >
    <v-list>
        <v-list-tile
          ripple
          v-for="(item, i) in this.$store.state.layout.items"
          :key="i"
          active-class="navbar__item--active"
          v-bind:exact="item.to.path === '/'"
          v-bind:to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'layout-logged-nav-left',
    computed: {
      compToggleNavLeft: {
        get() {
          return this.$store.state.layout.drawer;
        },
        set(e) {
          this.layoutToggleNavLeft(e);
        },
      },
    },
    methods: {
      ...mapActions({
        layoutToggleNavLeft: 'layout/toggleNavLeft',
      }),
    },
  };
</script>

<style scoped lang="scss">
  ul {
    li.active {
      background: red;
    }
  }
</style>

