import { MessageSend } from './types/GenerateEvent/GenerateEvent'
import { MessageSendEvent } from './types/schema'

export function handleMessageSend(event: MessageSend): void {
  let messageSend = new MessageSendEvent(event.transaction.hash.toHex())
  messageSend.ipfsAddress = event.params.ipfsAddress
  messageSend.to = event.params.to
  messageSend.save()
}
