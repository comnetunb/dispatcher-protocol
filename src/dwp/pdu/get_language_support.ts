import { CommandData, ProtocolType } from "../common";

export interface GetLanguageSupport extends CommandData {
  readonly type: ProtocolType.GetLanguageSupport,
  name: string,
  command: string,
}
