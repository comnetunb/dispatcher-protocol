import { ReturnCode } from '../common';

export interface TaskResult {
  task: any, // TODO
  code: ReturnCode,
  output: string,
}
