# Master-Slave Protocol (previously called DWP)

Communication protocol between [master](https://github.com/comnetunb/dispatcher-master) and [slave](https://github.com/comnetunb/dispatcher-Slave).
It is an application layer protocol responsible for exchanging messages, transmitting commands and configurations between a master and a slave machine.

It is independent of an specific transmition subsystem, requiring a transmission channel that guarantees reliability and data integrity.

The protocol data unities (PDU) are formatted via JSON and encapsulated by two marks indicating respectively the beginning and end of the packet.

It is assigned a unique numerical identifier for each PDU, ensuring that they are distinguished at the time of analysis of the package by one of the treatment ends.
