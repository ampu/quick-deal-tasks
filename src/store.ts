import {createStore} from 'vuex'
import {nanoid} from 'nanoid'

import {TaskCreationModel, TaskModel} from './utils/task-helpers.ts'
import {LocalState} from './utils/local-state.ts'

interface State {
  tasks: TaskModel[],
}

export const store = createStore<State>({
  state: {
    tasks: new LocalState(`akimutin-tasks`).useState((localState) => localState ?? []),
  },
  getters: {
    tasks: (state) => state.tasks,
  },
  mutations: {
    addTask(state, task: TaskModel) {
      state.tasks.push(task)
    },
    removeTask(state, task: TaskModel) {
      const taskOrder = state.tasks.findIndex((it) => it.id === task.id)
      if (taskOrder === -1) {
        return
      }
      state.tasks.splice(taskOrder, 1)
    },
  },
  actions: {
    addTask({commit}, taskCreation: TaskCreationModel) {
      const task = {
        id: nanoid(),
        ...taskCreation,
      }
      commit(`addTask`, task)
      return task
    },
    removeTask({state, commit}, task: TaskModel) {
      const oldLength = state.tasks.length
      commit(`removeTask`, task)
      return oldLength > state.tasks.length
    },
  },
})

Object.assign(window, {store})
