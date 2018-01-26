<template>
  <v-toolbar fixed app :clipped-left="clipped" :color="colorBgNavHeader" :dark="colorFontNavHeader">
    <v-toolbar-side-icon @click.stop="layoutToggleNavLeft(!drawer)"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="mr-4">
      <v-btn icon @click.stop="layoutToggleNavRight(true)">
        <v-badge overlap color="red" >
          <span slot="badge">3</span>
          <v-avatar size="35px" class="black">
            <v-icon dark>account_circle</v-icon>
          </v-avatar>
        </v-badge>
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'layout-logged-nav-header',
    computed: {
      ...mapState({
        title: state => state.layout.title,
        clipped: state => state.layout.clipped,
        colorBgNavHeader: state => state.layout.colorBgNavHeader,
        colorFontNavHeader: state => state.layout.colorFontNavHeader,
        drawer: state => state.layout.drawer,
      }),
    },
    methods: {
      ...mapActions({
        layoutToggleNavLeft: 'layout/toggleNavLeft',
        layoutToggleNavRight: 'layout/toggleNavRight',
      }),
    },
  };
</script>
