import { CommandData, ProtocolType } from '../common';

export interface LanguageTestInfo {
  name: string,
  command: string,
}

export interface LanguageCommand extends CommandData {
  readonly type: ProtocolType.LanguageCommand,
  languages: LanguageTestInfo[]
}
