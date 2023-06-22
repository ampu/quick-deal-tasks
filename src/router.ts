import {createRouter, createWebHashHistory} from 'vue-router'

import IndexPage from './pages/IndexPage.vue'
import TasksPage from './pages/TasksPage.vue'

import {RoutePath} from './utils/path-helpers.ts'

const routes = [
  {path: RoutePath.INDEX, component: IndexPage},
  {path: RoutePath.TASKS, component: TasksPage},
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
