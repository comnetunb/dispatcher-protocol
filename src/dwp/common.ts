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

export const enum ProtocolType {
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
  type: ProtocolType,
  ts: Date,
  v: string,
}

export interface PDU {
  header: PDUHeader,
  data: GetLanguageCommand
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
  | TerminateTaskResponse,
}

export const enum ReturnCode {
  Executing,
  Denied,
}

export const enum Flags {
  Resource = (1 << 0),
  Tasks = (1 << 1),
  State = (1 << 2),
  Alias = (1 << 3),
  SupportedLanguages = (1 << 4),
}

export const enum TerminateTaskCode {
  TERMINATED = 0,
  DENIED = 1
}
