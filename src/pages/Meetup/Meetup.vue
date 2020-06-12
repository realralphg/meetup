<template>
    <div class="q-pa-xl">
        <div class="card row justify-center">
            <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6 q-mb-xs">My Meetup</div>
                    <div class="row no-wrap items-center">
                    <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                    <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                    </div>
                </q-card-section>

                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section class="q-pt-none">
                    <div class="text-subtitle1 text-secondary">
                        June,2020 - Place where it happens
                    </div>
                    <div class="text-caption text-grey">
                        Small plates, salads & sandwiches in an intimate setting.
                        Small plates, salads & sandwiches in an intimate setting.
                        Small plates, salads & sandwiches in an intimate setting.
                        Small plates, salads & sandwiches in an intimate setting.
                    </div>
                </q-card-section>

                <q-card-actions>
                    <q-space/>
                    <q-btn no-caps color="primary" to="/signup">Register</q-btn>
                </q-card-actions>
            </q-card>

        </div>
    </div>
</template>

<script>

export default {
  props: ['id'],
  data () {
    return {
      stars: 4
    }
  }

}
</script>

<style scoped>
.my-card{
    width: 100%;
    max-width: 500px;
    max-height: 150px;
}
.card{
    justify-content: center;
    align-items: center;
}

</style>
