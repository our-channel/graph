import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MessageSend extends EthereumEvent {
  get params(): MessageSendParams {
    return new MessageSendParams(this);
  }
}

export class MessageSendParams {
  _event: MessageSend;

  constructor(event: MessageSend) {
    this._event = event;
  }

  get ipfsAddress(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GenerateEvent extends SmartContract {
  static bind(address: Address): GenerateEvent {
    return new GenerateEvent("GenerateEvent", address);
  }
}
