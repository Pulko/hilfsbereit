export interface Task {
  text: string,
  checked: boolean,
}

export const DEFAULT_TASK: Task = { text: '', checked: false }