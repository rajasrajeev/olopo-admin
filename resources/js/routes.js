export const routes = [
  // Static front page (Home)
{
    path: '/',
    component: () => import('./components/Layout/Frontend/Layout'),
    children: [
        {
            path: '',
            name: 'Home',
            meta: {
                title: 'Home | Olopo'
            },
            component: () => import('./components/Frontend/Index')
        },
        {
            path: '/gallery',
            name: 'Gallery',
            meta: {
                title: 'Gallery | Olopo'
            },
            component: () => import('./components/Frontend/Gallery')
        },
        {
            path: '/categories/:id',
            name: 'frontend.categories',
            meta: {
                title: 'Categories | Olopo'
            },
            component: () => import('./components/Frontend/Categories')
        },
        {
            path: '/events',
            name: 'frontend.events',
            meta: {
                title: 'Events | Olopo'
            },
            component: () => import('./components/Frontend/Events')
        },
        {
            path: '/movies',
            name: 'frontend.movies',
            meta: {
                title: 'Movies | Olopo'
            },
            component: () => import('./components/Frontend/Movies')
        },
        {
            path: '/leaderboard',
            name: 'frontend.leaderboard',
            meta: {
                title: 'Leaderboard | Olopo'
            },
            component: () => import('./components/Frontend/Leaderboard')
        },
        {
            path: '/contact',
            name: 'frontend.contact',
            meta: {
                title: 'Contact Us | Olopo'
            },
            component: () => import('./components/Frontend/Contact')
        },
        {
            path: '/terms-and-conditions',
            name: 'frontend.terms',
            meta: {
                title: 'Terms and Conditions | Olopo'
            },
            component: () => import('./components/Frontend/Terms')
        },
        {
            path: '/privacy-policy',
            name: 'frontend.privacy',
            meta: {
                title: 'Privacy Policy | Olopo'
            },
            component: () => import('./components/Frontend/Privacy')
        },
        {
            path: '/gift-vouchers',
            name: 'frontend.gift',
            meta: {
                title: 'Terms and Conditions | Olopo'
            },
            component: () => import('./components/Frontend/Gift')
        },
        {
            path: '/merchant-vouchers',
            name: 'frontend.merchant',
            meta: {
                title: 'Terms and Conditions | Olopo'
            },
            component: () => import('./components/Frontend/Merchant')
        }
    ]
},

  // Auth routes
  {
    path: '/auth',
    component: () => import('./components/Auth/Auth'),
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        meta: {
          title: 'Login | Olopo Admin'
        },
        component: () => import('./components/Auth/Login')
      },
      {
        path: '/register',
        name: 'Register',
        meta: {
          title: 'Register | Olopo Admin'
        },
        component: () => import('./components/Auth/Register')
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        meta: {
          title: 'Forgot Password | Olopo Admin'
        },
        component: () => import('./components/Auth/ForgotPassword')
      }
    ]
  },

  // Verify and reset password
  {
    path: '/verify-email/:key',
    name: 'VerifyEmail',
    meta: {
      title: 'Verify Email | Olopo Admin'
    },
    component: () => import('./components/Auth/VerifyEmail')
  },
  {
    path: '/reset_password/:key',
    name: 'ResetPassword',
    meta: {
      title: 'Reset Password | Olopo Admin'
    },
    component: () => import('./components/Auth/ResetPassword')
  },

  // Main layout routes (Dashboard, etc.)
  {
    path: '/dashboard',
    component: () => import('./components/Layout/Layout'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard | Olopo Admin'
        },
        component: () => import('./components/Dashboard/Dashboard')
      },
      {
        path: 'profile',
        name: 'Profile',
        meta: {
          title: 'Profile | Olopo Admin'
        },
        component: () => import('./components/Profile/Profile')
      },
      {
        path: 'setting',
        name: 'Setting',
        meta: {
          title: 'Setting | Olopo Admin'
        },
        component: () => import('./components/Setting/Setting')
      },
      {
        path: 'categories',
        name: 'Categories',
        meta: {
          title: 'Categories | Olopo Admin'
        },
        component: () => import('./components/Categories/Index')
      },
      {
        path: 'category-details/:categoryId',
        name: 'category-details',
        meta: {
          title: 'Category Details | Olopo Admin'
        },
        component: () => import('./components/Categories/Details')
      },
      {
        path: 'gallery',
        name: 'Gallery Admin',
        meta: {
          title: 'Gallery | Olopo Admin'
        },
        component: () => import('./components/Gallery/Index')
      },
      {
        path: 'logout',
        name: 'Logout',
        meta: {
          title: 'Logout | Olopo Admin'
        },
        component: () => import('./components/Logout')
      }
    ]
  },

  // Fallback route
  {
    path: '*',
    component: () => import('./components/Errors/NotFound')
  }
];
