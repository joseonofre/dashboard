<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/imgs/logo.png" alt="Monumenta" class="responsive-img" />
        <br>
        <blockquote>
          Bem vindo ao novo Dashboard da Monumenta
          <footer>
            <small>
              <em>&mdash;Monumenta</em>
            </small>
          </footer>
        </blockquote>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import MonuLayoutLogged from '@/components/layout-logged/layout';

  export default {
    components: {
      MonuLayoutLogged,
    },
    data() {
      return {
        clipped: true, // header full
        colorBgNavHeade: 'grey darken-4',
        colorFontNavHeade: true,

        drawer: true, // nav-left
        fixed: false, // footer
        items: [
          { icon: 'bubble_chart', title: 'Inspire' },
        ],
        miniVariant: false, // nav-left minificado
        right: true, // menu-right
        rightDrawer: false, // menu right aberto
        title: 'Novo dashboard', // title
      };
    },
  };
</script>
