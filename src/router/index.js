import { createRouter, createWebHistory } from 'vue-router'
import EntryPointScreen from '@/UserScreens/EntryPointScreen.vue'
import SignIn from '@/UserScreens/SignInView.vue'
import SignUp from '@/UserScreens/SignUpView.vue'
import PublishedBooks from '@/AdminScreens/PublishedBooks.vue'
import BookForm from '@/AdminScreens/BookForm.vue'
import HomeScreen from '@/AdminScreens/HomeScreen.vue'
import HistoryScreen from '@/UserScreens/HistoryView.vue'
import HomeScreenUser from '@/UserScreens/HomeViewUser.vue'
import BorrowBook from '@/UserScreens/BorrrowBookView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: EntryPointScreen
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/admin/publishedbooks',
      component:  PublishedBooks
    },
    {
      path: '/admin/addbook',
      component : BookForm
    },
    {
      path: '/admin/updatebook/:id',
      component : BookForm
    },
    {
      path: '/admin/deletebook/:id',
      component : BookForm
    },
    {
      path : '/history',
      component : HistoryScreen
    },
    {
      path : '/borrowbook',
      component : BorrowBook
    },
    {
      path : '/HomeScreen',
      component : HomeScreen
    },{
    path : '/HomeScreenUser',
      component : HomeScreenUser
    }


  ]
})

export default router
