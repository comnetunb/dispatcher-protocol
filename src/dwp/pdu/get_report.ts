import { CommandData, ProtocolType } from '../common';

export interface GetReport extends CommandData {
  readonly type: ProtocolType.GetReport,
  resources: boolean,
  tasks: boolean,
  state: boolean,
  alias: boolean,
  supportedLanguages: boolean,
}
