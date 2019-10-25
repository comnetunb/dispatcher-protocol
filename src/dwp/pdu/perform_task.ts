import { CommandData, ProtocolType, TaskInfo, ProtocolFile } from '../common';

export interface PerformTask extends CommandData {
  readonly type: ProtocolType.PerformTask,
  task: TaskInfo, // TODO
  commandLine: string,
  files: ProtocolFile[], // TODO
}
