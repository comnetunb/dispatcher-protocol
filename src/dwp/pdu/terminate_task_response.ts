import { ReturnCode } from "../common";

export interface TerminateTaskResponse {
  taskId: string,
  code: ReturnCode,
}
