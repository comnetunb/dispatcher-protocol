import { CommandData, ProtocolType, TaskInfo } from '../common';

export interface PerformTask extends CommandData {
  readonly type: ProtocolType.PerformTask,
  task: TaskInfo, // TODO
  commandLine: string,
  files: any, // TODO
}
