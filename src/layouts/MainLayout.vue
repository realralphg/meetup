<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="xs"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer"> MeetUp </router-link>
        </q-toolbar-title>

        <q-space/>
        <!-- Show if Not Logged In -->
          <q-btn v-show="!user.currentUser" no-caps flat class="gt-xs row" v-for="link in generalLinks" :key="link.id" :to="link.to" exact clickable>
            <div class="column justify-center">
              <q-icon :name="link.icon" class="q-mr-xs" size="18px"/>
            </div>

            <div class="column q-mr-md">
              <q-item-label>{{link.label}}</q-item-label>
            </div>
          </q-btn>

        <!-- Show ONLY if Logged In -->
          <q-btn v-show="user.currentUser" no-caps flat class="gt-xs row" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
            <div class="column justify-center">
              <q-icon :name="link.icon" class="q-mr-xs" size="18px"/>
            </div>

            <div class="column q-mr-md">
              <q-item-label>{{link.label}}</q-item-label>
            </div>
          </q-btn>

        <q-btn v-show="user.currentUser" no-caps flat @click="signOut" color="white"> Sign Out </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      overlay
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label
          header
          class="text-white text-h5 text-weight-light"
        >
          MeetUp
        </q-item-label>

        <!-- Show if Not Logged In -->
        <q-item v-show="!user.currentUser" class="text-grey" v-for="link in generalLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Show ONLY if Logged In -->
        <q-item v-show="user.currentUser" class="text-grey" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-btn v-show="user.currentUser" no-caps color="white" flat @click="signOut"> Sign Out </q-btn>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import * as firebase from 'firebase/app'

export default {
  name: 'MainLayout',

  // user contains firebase.auth - use to check for currentUser
  computed: {
    user () {
      return firebase.auth()
    }
  },

  data () {
    return {
      leftDrawerOpen: false,
      currentUser: null,

      generalLinks: [
        {
          label: 'Sign Up',
          icon: 'face',
          to: '/signup'
        },
        {
          label: 'Sign In',
          icon: 'lock_open',
          to: '/signin'
        }
      ],

      essentialLinks: [
        {
          label: 'View Meetup',
          icon: 'supervisor_account',
          to: '/meetups'
        },
        {
          label: 'Organize Meetup',
          icon: 'room',
          to: '/meetup/new'
        },
        {
          label: 'Profile',
          icon: 'person',
          to: '/profile'
        }
      ]
    }
  },

  methods: {
    signOut () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signIn')
      })
    }
  }
}
</script>

<style scoped>
.q-router-link--exact-active{
  color: white !important;
}
</style>
