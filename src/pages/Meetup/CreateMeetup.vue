<template>
  <div class="q-pa-sm row justify-center">
    <div class="q-gutter-md" style="max-width: 500px">
        <div class="q-pt-lg text-weight-light text-h4 text-primary" >
            Create A Meetup
        </div>
     <!-- <form @submit.prevent="onCreateMeetup"> -->
          <q-input v-model="form.title" name="title" label="Title"/>
          <q-input v-model="form.location" name="location" label="Location" />

          <q-uploader class="q-mt-md q-mb-md"
            style="max-width: 300px"
            url="http://localhost:4444/upload"
            label="Upload Image"
            multiple
            accept=".jpg, image/*"
            @rejected="onRejected"
          />

          <q-input
            v-model="form.description"
            name="description"
            filled
            clearable
            type="textarea"
            color="primary"
            label="Enter description"
            hint="Keep short and precise"
          />
          <q-input  v-model="form.date" label="Date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.date" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input v-model="form.time" label="Time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="form.time" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

        <q-space/>
        <div class="q-mt-sm row justify-right">
            <q-btn type="submit" no-caps color="primary" :disabled="!formIsValid" @click="onCreateMeetup" >Save</q-btn>
        </div>
      <!-- </form> -->

    </div>
  </div>
</template>

<script>
import { firebaseApp } from 'boot/firebase'

export default {
  data () {
    return {
      form: {
        title: '',
        location: '',
        image: '',
        description: '',
        date: new Date(),
        time: new Date()
      }
    }
  },

  computed: {
    formIsValid () {
      return this.title !== '' &&
            this.location !== '' &&
            this.description !== ''
    }
  },

  methods: {
    onCreateMeetup () {
      // firebaseDb.collection('newmeetup').add(this.form).then(() => {
      //   // this.$router.push('/meetups')

      // })
      console.log(firebaseApp.firestore)
    },

    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }
  }

}
</script>

<style scoped>

</style>
