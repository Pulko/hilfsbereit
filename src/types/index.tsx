export interface Task {
  text: string,
  checked: boolean,
}

export const DEFAULT_TASK: Task = { text: '', checked: false }
export const DEFAULT_TASK_TEXT: string = 'Nothing yet...'