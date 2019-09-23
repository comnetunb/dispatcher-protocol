import { PDU, ProtocolVersion, ProtocolType, CommandData } from "./common";

const BEGIN_TAG = '/BEGIN/';
const END_TAG = '/END/';

export function EncapsulatePDU(data: CommandData): string {
  const packet: PDU = {
    header: {
      ts: (new Date()),
      v: ProtocolVersion,
    },
    data,
  }

  return BEGIN_TAG + JSON.stringify(packet) + END_TAG;
};

export function ExposeFirstPDU(packet: string): string {
  const beginIndex = packet.search(BEGIN_TAG);

  if (beginIndex === -1) {
    throw Object({ error: 'expose error', reason: 'begin tag was not found' });
  }

  const restOfThePacket = packet.substring(beginIndex + BEGIN_TAG.length);
  let endIndex = restOfThePacket.search(END_TAG);

  if (endIndex === -1) {
    throw Object({ error: 'expose error', reason: 'end tag was not found' });
  }

  endIndex += beginIndex + BEGIN_TAG.length;
  return packet.substring(beginIndex + BEGIN_TAG.length, endIndex);
};

/*
 * Removes first occurrence of DWP packet
*/
export function RemoveFirstPDU(packet: string): string {
  const beginIndex = packet.search(BEGIN_TAG);

  if (beginIndex === -1) {
    throw Object({ error: 'remove error', reason: 'begin tag was not found' });
  }

  const restOfThePacket = packet.substring(beginIndex + BEGIN_TAG.length);
  let endIndex = restOfThePacket.search(END_TAG);

  if (endIndex === -1) {
    throw Object({ error: 'remove error', reason: 'end tag was not found' });
  }

  endIndex += beginIndex + BEGIN_TAG.length;
  return packet.replace(packet.substring(beginIndex, endIndex + END_TAG.length), '');
};
