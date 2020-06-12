<template>
    <div>
        <div class="row justify-center q-pa-sm">
            <div class="q-ma-xs">
                 <q-btn to="/meetups"  color="secondary" text-color="white" label="Explore Meetups"/>
            </div>

            <div class="q-ma-xs">
                 <q-btn to="/meetup/new"  color="secondary" text-color="white" label="Organize Meetups"/>
            </div>
        </div>

        <div>
            <q-carousel
                v-model="slide"
                swipeable
                animated
                infinite

                :navigation="navigation"
                :navigation-position="navPos"
                height="350px"
                class="bg-grey-8 text-white"
                >

                <q-carousel-slide :name="meetup.name" class="q-pa-none" v-for="meetup in loadedMeetups" :key="meetup.id">
                    <div>
                        <q-img :src="meetup.imageUrl" height="350px"/>
                        <div class="custom-caption absolute-bottom text-white text-h5 text-weight-light">
                        {{ meetup.title }}
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>

            <div class="text-center text-grey-9">
                <p> Join our awesome meetups! </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    // for Carousel
      slide: 'newyork',
      navigation: true,
      navPos: 'bottom',

      title: 'Meetup Paris',

      loadedMeetups: [
        {
          id: '1',
          name: 'newyork',
          imageUrl: 'https://www.ef.com/sitecore/__/~/media/universal/pg/8x5/destination/FR_00_PAR_1.jpg',
          title: 'Meetup Newyork',
          caption: 'Experience Life',
          date: '2020-07-17'
        },
        {
          id: '2',
          name: 'paris',
          imageUrl: 'https://assets.ecenglish.com/blogs/uploads/sites/24/2013/04/EC-Group-Photo.jpg',
          title: 'Meetup Paris',
          caption: 'Experience Power',
          date: '2020-07-19'
        }
      ]
    }
  }

}
</script>

<style scoped>

.custom-caption{
    bottom: 50px;
    text-align: center;
    padding: 12px;
    background-color: rgba(0, 0, 0, .3);
}

</style>
