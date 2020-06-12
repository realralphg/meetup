
const state = {
  loadedMeetups: [
    {
      id: '1',
      imageUrl: 'https://www.ef.com/sitecore/__/~/media/universal/pg/8x5/destination/FR_00_PAR_1.jpg',
      title: 'Meetup Newyork',
      caption: 'Experience Life',
      date: '2020-07-17'
    },
    {
      id: '2',
      imageUrl: 'https://assets.ecenglish.com/blogs/uploads/sites/24/2013/04/EC-Group-Photo.jpg',
      title: 'Meetup Paris',
      caption: 'Experience Power',
      date: '2020-07-19'
    }
  ],

  user: {
    id: '500',
    registeredMeetups: '2'
  }
}

const mutations = {

}

const actions = {

}

const getters = {
  // return all meetups sorted by date
  loadedMeetups (state) {
    return state.loadedMeetups.sort((meetupA, meetupB) => {
      return meetupA.date > meetupB.date
    })
  },
  // return a single particular meetup
  loadedMeetup (state) {
    return (meetupId) => {
      return state.loadedMeetups.find((meetup) => {
        return meetup.id === meetupId
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
