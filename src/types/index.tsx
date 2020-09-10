export interface Task {
  text: string,
  checked: boolean,
}

export const DEFAULT_TASK: Task = { text: 'Nothing yet...', checked: false }