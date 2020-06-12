<template>
  <div class="q-pa-sm row justify-center">
    <div class="q-gutter-md" style="max-width: 500px">
        <div class="q-pt-lg text-weight-light text-h4 text-primary" >
            Sign In Form
        </div>
      <form @submit.prevent="onSignIn">
          <q-input v-model="email" name="email" label="Email"/>
          <q-input v-model="password" type="password" name="password" label="Password" />

        <q-space/>
        <div class="q-mt-sm row justify-right">
            <q-btn type="submit" no-caps color="primary" :disabled="!formIsValid"  >Sign In</q-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'SignIn',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    formIsValid () {
      return this.email !== '' &&
            this.password !== ''
    }
  },

  methods: {
    async onSignIn () {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
          alert('You are logged in!')
          this.$router.push('/')
        })
      } catch (err) {
        alert(err.message)
      }
    }
  }

}
</script>

<style scoped>

</style>
