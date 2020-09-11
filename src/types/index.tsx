export interface Task {
  text: string,
  checked: boolean,
}

export interface PageProps {
  history: {
    push: (newPath: string) => void,
  },
  location: {
    hash: string,
  }
}

export const DEFAULT_TASK: Task = { text: '', checked: false }
export const DEFAULT_TASK_TEXT: string = 'Nothing yet...'