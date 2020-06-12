
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('pages/Home.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/meetups',
        name: 'Meetups',
        component: () => import('pages/Meetup/Meetups.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/meetup/new',
        name: 'CreateMeetup',
        component: () => import('pages/Meetup/CreateMeetup.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/meetups/:id',
        name: 'Meetup',
        props: true,
        component: () => import('pages/Meetup/Meetup.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('pages/User/Profile.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import('pages/User/SignUp.vue'),
        meta: {
          requiresGuest: true
        }
      },
      {
        path: '/signin',
        name: 'SignIn',
        component: () => import('pages/User/SignIn.vue'),
        meta: {
          requiresGuest: true
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
