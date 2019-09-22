import { CommandData, ProtocolType, TaskInfo } from '../common';

export interface ResourcesReport {
  cpu: number,
  memory: number,
}

export enum WorkerState {
  Executing,
  Paused,
}

export interface StateReport {
  state: WorkerState,
}

export interface TasksReport {
  tasks: TaskInfo[], // TODO,
}

export interface LanguageInfo {
  name: string,
  version: string,
  command: string,
  supported: boolean,
}

export interface SupportedLanguagesReport {
  languages: LanguageInfo[],
}

export interface Report extends CommandData {
  readonly type: ProtocolType.Report,
  resources?: ResourcesReport,
  state?: StateReport,
  tasks?: TasksReport,
  languages?: SupportedLanguagesReport,
  alias?: string,
}
