import { CommandData, ProtocolType } from '../common';
import { LanguageInfo } from './report';

export interface LanguageSupport extends CommandData {
  readonly type: ProtocolType.LanguageSupport,
  languageInfo: LanguageInfo,
}
