<template>
  <v-app>
    <monu-nav-left></monu-nav-left>
    <monu-nav-header></monu-nav-header>
    <v-content>
      <transition name="slide-x-reverse-transition" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="this.$store.state.layout.right"
      fixed
      v-model="layoutToggleNavRight"
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <monu-footer></monu-footer>
  </v-app>
</template>

<script>
  import { mapActions } from 'vuex';
  import MonuNavLeft from './nav-left';
  import MonuNavHeader from './nav-header';
  import MonuFooter from './footer';

  export default {
    name: 'layout-logged',
    components: {
      MonuNavLeft,
      MonuNavHeader,
      MonuFooter,
    },
    computed: {
      layoutToggleNavRight: {
        get() {
          return this.$store.state.layout.rightDrawer;
        },
        set(e) {
          this.actionLayoutToggleNavRight(e);
        },
      },

    },
    methods: {
      ...mapActions({
        actionLayoutToggleNavRight: 'layout/toggleNavRight',
      }),
    },
  };
</script>
