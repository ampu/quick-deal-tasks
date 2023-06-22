export type TaskCreationModel = {
  title: string,
}

export type TaskModel = TaskCreationModel & {
  id: string,
}
