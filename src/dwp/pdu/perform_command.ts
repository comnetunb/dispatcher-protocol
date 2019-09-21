export const enum Command {
  Resume,
  Pause,
  Stop,
}

export interface PerformCommand {
  command: Command,
}
