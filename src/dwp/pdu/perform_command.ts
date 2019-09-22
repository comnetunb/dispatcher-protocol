import { CommandData, ProtocolType } from '../common';

export enum Command {
  Resume,
  Pause,
  Stop,
}

export interface PerformCommand extends CommandData {
  readonly type: ProtocolType.PerformCommand,
  command: Command,
}
