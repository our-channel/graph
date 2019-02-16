import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class MessageSendEvent extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MessageSendEvent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MessageSendEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MessageSendEvent", id.toString(), this);
  }

  static load(id: string): MessageSendEvent | null {
    return store.get("MessageSendEvent", id) as MessageSendEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ipfsAddress(): Bytes {
    let value = this.get("ipfsAddress");
    return value.toBytes();
  }

  set ipfsAddress(value: Bytes) {
    this.set("ipfsAddress", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}
