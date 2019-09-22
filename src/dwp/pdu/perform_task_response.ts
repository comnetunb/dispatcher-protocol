import { ReturnCode, CommandData, ProtocolType, TaskInfo } from '../common';

export interface PerformTaskResponse extends CommandData {
  readonly type: ProtocolType.PerformTaskResponse,
  task: TaskInfo, // TODO
  code: ReturnCode,
}
