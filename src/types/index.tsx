export interface Task {
  text: string,
  checked: boolean,
}

export const DEFAULT_TASK: Task = { text: 'TODO: nothing yet...', checked: false }