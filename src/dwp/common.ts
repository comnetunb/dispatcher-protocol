import { GetLanguageCommand } from "./pdu/get_language_command";
import { GetLanguageSupport } from "./pdu/get_language_support";
import { LanguageSupport } from "./pdu/language_support";
import { LanguageCommand } from "./pdu/language_command";
import { PerformCommand } from "./pdu/perform_command";
import { PerformTask } from "./pdu/perform_task";
import { PerformTaskResponse } from "./pdu/perform_task_response";
import { TaskResult } from "./pdu/task_result";
import { GetReport } from "./pdu/get_report";
import { Report } from "./pdu/report";
import { TerminateTask } from "./pdu/terminate_task";
import { TerminateTaskResponse } from "./pdu/terminate_task_response";

// Protocol Version
export const ProtocolVersion: string = '2.0';

export enum ProtocolType {
  GetReport = 0,
  Report = 1,
  PerformTask = 2,
  PerformTaskResponse = 3,
  TaskResult = 4,
  TerminateTask = 5,
  TerminateTaskResponse = 6,
  PerformCommand = 7,
  GetLanguageSupport = 8,
  LanguageSupport = 9,
  GetLanguageCommand = 10,
  LanguageCommand = 11
}

export interface PDUHeader {
  ts: Date,
  v: string,
}

export interface CommandData {
  type: ProtocolType,
}

export interface TaskInfo {
  id: string,
  startTime?: Date,
  pid?: number,
}

export interface PDU {
  header: PDUHeader,
  data: CommandData,
}

export enum ReturnCode {
  Executing,
  Denied,
  Error,
  Success,
}

export enum TerminateTaskCode {
  TERMINATED = 0,
  DENIED = 1
}

export interface ProtocolFile {
  name: string,
  content: string,
}
