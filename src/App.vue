<template>
  <v-app>
    <v-app-bar
        app
        color="#7c4def"
        dark
    >
      <v-img
          max-width="25"
          max-height="25"
          src='./assets/Initial-kalgory-logo.svg'
          @click="$router.push('/')"
      >
      </v-img>
    </v-app-bar>
    <v-navigation-drawer
        app
        expand-on-hover
        class="purple lighten-4"
    >
      <sign-site></sign-site>
      <v-divider></v-divider>
      <menu-site :items="viewItems"></menu-site>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import chatSite from './view/chatSite'
// import gridSite from './view/gridSite'
import signSite from './component/sign'
import menuSite from './component/menu'


export default {
  components: {
    // chatSite,
    // gridSite,
    signSite,
    menuSite
  },
  data() {
    return {
      drawer: false,
      viewItems: [{
        title: 'Chat',
        icon: 'mdi-chat',
        to: '/chat'
      }, {
        title: 'Qna',
        icon: 'mdi-account-question',
        to: '/qna'
      }
      ]
    }
  },

}
</script>