import { CommandData, ProtocolType } from '../common';

export interface GetLanguageCommand extends CommandData {
  readonly type: ProtocolType.GetLanguageCommand,
  languages: string[],
}
