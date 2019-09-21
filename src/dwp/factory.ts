import { GetLanguageCommand } from "./pdu/get_language_command";
import { GetLanguageSupport } from "./pdu/get_language_support";
import { GetReport } from "./pdu/get_report";
import { LanguageCommand } from "./pdu/language_command";
import { LanguageSupport } from "./pdu/language_support";
import { PerformCommand } from "./pdu/perform_command";
import { PerformTaskResponse } from "./pdu/perform_task_response";
import { PerformTask } from "./pdu/perform_task";
import { Report } from "./pdu/report";
import { TaskResult } from "./pdu/task_result";
import { TerminateTask } from "./pdu/terminate_task";
import { TerminateTaskResponse } from "./pdu/terminate_task_response";
import { PDU, ProtocolVersion, ProtocolType } from "./common";

const BEGIN_TAG = '/BEGIN/';
const END_TAG = '/END/';

export function encapsulate(data: GetLanguageCommand
  | GetLanguageSupport
  | LanguageSupport
  | LanguageCommand
  | PerformCommand
  | PerformTask
  | PerformTaskResponse
  | TaskResult
  | GetReport
  | Report
  | TerminateTask
  | TerminateTaskResponse
  , type: ProtocolType): string {

  const packet: PDU = {
    header: {
      type,
      ts: (new Date()),
      v: ProtocolVersion,
    },
    data,
  }

  return BEGIN_TAG + JSON.stringify(packet) + END_TAG;
};

export function expose(packet: string): string {
  const beginIndex = packet.search(BEGIN_TAG);

  if (beginIndex === -1) {
    throw Object({ error: 'expose error', reason: 'begin tag was not found' });
  }

  const restOfThePacket = packet.substring(beginIndex + BEGIN_TAG.length);
  const endIndex = restOfThePacket.search(END_TAG);

  if (endIndex === -1) {
    throw Object({ error: 'expose error', reason: 'end tag was not found' });
  }

  return packet.substring(beginIndex + BEGIN_TAG.length, endIndex);
};

/*
 * Removes first occurrence of DWP packet
*/
export function remove(packet: string): string {
  const beginIndex = packet.search(BEGIN_TAG);

  if (beginIndex === -1) {
    throw Object({ error: 'remove error', reason: 'begin tag was not found' });
  }

  const restOfThePacket = packet.substring(beginIndex + BEGIN_TAG.length);
  const endIndex = restOfThePacket.search(END_TAG);

  if (endIndex === -1) {
    throw Object({ error: 'remove error', reason: 'end tag was not found' });
  }

  return packet.replace(packet.substring(beginIndex, endIndex + END_TAG.length), '');
};
