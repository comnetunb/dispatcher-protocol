import { ReturnCode, CommandData, ProtocolType } from "../common";

export interface TerminateTaskResponse extends CommandData {
  readonly type: ProtocolType.TerminateTaskResponse,
  taskId: string,
  code: ReturnCode,
}
