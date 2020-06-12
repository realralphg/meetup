<template>
    <div class="row q-pa-md">
        <q-card class="my-card q-ma-sm" v-for="meetup in loadedMeetups" :key="meetup.id">
            <q-img :src="meetup.imageUrl" height="150px"/>

            <q-card-section>
                <q-btn
                fab
                color="primary"
                icon="event"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                    <div class="col text-h6">
                        {{meetup.title}}
                    </div>
                    <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                        <q-icon name="event" />
                        {{meetup.date}}
                    </div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat color="primary"  icon="touch_app" to="/meetups/id"/>
                <q-btn flat color="primary" :to="'/meetups/id' + meetup.id">
                    View Meetup
                </q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      stars: 4
    }
  },
  computed: {
    ...mapGetters('meetups', ['loadedMeetups'])

  }
}
</script>

<style scoped>
.my-card{
    width: 100%;
    max-width: 300px;

}

</style>
