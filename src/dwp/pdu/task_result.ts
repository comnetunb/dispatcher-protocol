import { ReturnCode, CommandData, ProtocolType, TaskInfo } from '../common';

export interface TaskResult extends CommandData {
  readonly type: ProtocolType.TaskResult,
  task: TaskInfo, // TODO
  code: ReturnCode,
  output: string,
}
