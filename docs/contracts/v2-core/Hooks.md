## Hooks

V4 decides whether to invoke specific hooks by inspecting the leading bits of the address that
the hooks contract is deployed to.
For example, a hooks contract deployed to address: 0x9000000000000000000000000000000000000000
has leading bits '1001' which would cause the 'before open' and 'after make' hooks to be used.

### BEFORE_OPEN_FLAG

```solidity
uint256 BEFORE_OPEN_FLAG
```

### AFTER_OPEN_FLAG

```solidity
uint256 AFTER_OPEN_FLAG
```

### BEFORE_MAKE_FLAG

```solidity
uint256 BEFORE_MAKE_FLAG
```

### AFTER_MAKE_FLAG

```solidity
uint256 AFTER_MAKE_FLAG
```

### BEFORE_TAKE_FLAG

```solidity
uint256 BEFORE_TAKE_FLAG
```

### AFTER_TAKE_FLAG

```solidity
uint256 AFTER_TAKE_FLAG
```

### BEFORE_CANCEL_FLAG

```solidity
uint256 BEFORE_CANCEL_FLAG
```

### AFTER_CANCEL_FLAG

```solidity
uint256 AFTER_CANCEL_FLAG
```

### BEFORE_CLAIM_FLAG

```solidity
uint256 BEFORE_CLAIM_FLAG
```

### AFTER_CLAIM_FLAG

```solidity
uint256 AFTER_CLAIM_FLAG
```

### Permissions

```solidity
struct Permissions {
  bool beforeOpen;
  bool afterOpen;
  bool beforeMake;
  bool afterMake;
  bool beforeTake;
  bool afterTake;
  bool beforeCancel;
  bool afterCancel;
  bool beforeClaim;
  bool afterClaim;
}
```

### HookAddressNotValid

```solidity
error HookAddressNotValid(address hooks)
```

Thrown if the address will not lead to the specified hook calls being called

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hooks | address | The address of the hooks contract |

### InvalidHookResponse

```solidity
error InvalidHookResponse()
```

Hook did not return its selector

### FailedHookCall

```solidity
error FailedHookCall()
```

thrown when a hook call fails

### validateHookPermissions

```solidity
function validateHookPermissions(contract IHooks self, struct Hooks.Permissions permissions) internal pure
```

Utility function intended to be used in hook constructors to ensure
the deployed hooks address causes the intended hooks to be called

_permissions param is memory as the function will be called from constructors_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | contract IHooks |  |
| permissions | struct Hooks.Permissions | The hooks that are intended to be called |

### isValidHookAddress

```solidity
function isValidHookAddress(contract IHooks hook) internal pure returns (bool)
```

Ensures that the hook address includes at least one hook flag or is the 0 address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hook | contract IHooks | The hook to verify |

### callHook

```solidity
function callHook(contract IHooks self, bytes data) internal
```

performs a hook call using the given calldata on the given hook

### beforeOpen

```solidity
function beforeOpen(contract IHooks self, struct IBookManager.BookKey key, bytes hookData) internal
```

calls beforeOpen hook if permissioned and validates return value

### afterOpen

```solidity
function afterOpen(contract IHooks self, struct IBookManager.BookKey key, bytes hookData) internal
```

calls afterOpen hook if permissioned and validates return value

### beforeMake

```solidity
function beforeMake(contract IHooks self, struct IBookManager.MakeParams params, bytes hookData) internal
```

calls beforeMake hook if permissioned and validates return value

### afterMake

```solidity
function afterMake(contract IHooks self, struct IBookManager.MakeParams params, OrderId orderId, bytes hookData) internal
```

calls afterMake hook if permissioned and validates return value

### beforeTake

```solidity
function beforeTake(contract IHooks self, struct IBookManager.TakeParams params, bytes hookData) internal
```

calls beforeTake hook if permissioned and validates return value

### afterTake

```solidity
function afterTake(contract IHooks self, struct IBookManager.TakeParams params, uint64 takenAmount, bytes hookData) internal
```

calls afterTake hook if permissioned and validates return value

### beforeCancel

```solidity
function beforeCancel(contract IHooks self, struct IBookManager.CancelParams params, bytes hookData) internal
```

calls beforeCancel hook if permissioned and validates return value

### afterCancel

```solidity
function afterCancel(contract IHooks self, struct IBookManager.CancelParams params, uint64 canceledAmount, bytes hookData) internal
```

calls afterCancel hook if permissioned and validates return value

### beforeClaim

```solidity
function beforeClaim(contract IHooks self, OrderId orderId, bytes hookData) internal
```

calls beforeClaim hook if permissioned and validates return value

### afterClaim

```solidity
function afterClaim(contract IHooks self, OrderId orderId, uint64 claimedAmount, bytes hookData) internal
```

calls afterClaim hook if permissioned and validates return value

### hasPermission

```solidity
function hasPermission(contract IHooks self, uint256 flag) internal pure returns (bool)
```

