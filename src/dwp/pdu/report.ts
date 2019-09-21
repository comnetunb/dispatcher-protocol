export interface ResourcesReport {
  cpu: number,
  memory: number,
}

export const enum WorkerState {
  Executing,
  Paused,
}

export interface StateReport {
  state: WorkerState,
}

export interface TasksReport {
  tasks: any[], // TODO,
}

export interface SupportedLanguagesReport {
  languages: string[],
}

export interface Report {
  resources?: ResourcesReport,
  state?: StateReport,
  tasks?: TasksReport,
  languages?: SupportedLanguagesReport,
  alias?: string,
}
