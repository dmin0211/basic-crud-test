<template>
  <div>
    <v-container v-if="!user">
      <v-row
          no-gutters
          justify="end"
      >
        <v-col align="center">

          <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
          <v-btn v-else icon dark @click="signInWithGoogle">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row
          no-gutters
          justify="end"
      >
        <v-col align="center">
          <v-btn icon @click="signOut">
            <v-avatar>
              <v-img v-bind:src="user.photoURL"></v-img>
            </v-avatar>
          </v-btn>
        </v-col>
      </v-row>
      <v-list-item dark>
        <v-list-item-content>
          <v-list-item-title class="title" v-text="user.displayName"></v-list-item-title>
          <v-list-item-subtitle v-text="user.email"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase/app'
// import 'firebase/auth'

export default {
  data() {
    return {
      user: '',
      loading: false
    }
  },
  name: "sign.vue",
  components: {},
  methods: {
    async signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      this.loading = true
      firebase.auth().languageCode = 'ko'
      await firebase.auth().signInWithPopup(provider).then((result) => {
        this.user = result.user;
      }).then(() => {
        this.loading = false
      }).catch(function (error) {
        console.log(error)
      });
     // console.log(this.user)
    },
    signOut() {
      firebase.auth().signOut().then(() => {
        this.user = null
        console.log('success signout!')
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>