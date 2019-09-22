import { CommandData, ProtocolType } from '../common';

export interface TerminateTask extends CommandData {
  readonly type: ProtocolType.TerminateTask,
  taskId: string,
}
