## ILocker

Interface for the locker contract

### lockAcquired

```solidity
function lockAcquired(address lockCaller, bytes data) external returns (bytes)
```

Called by the book manager on `msg.sender` when a lock is acquired

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| lockCaller | address |  |
| data | bytes | The data that was passed to the call to lock |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | Any data that you want to be returned from the lock call |

