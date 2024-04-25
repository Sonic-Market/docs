## SegmentedSegmentTree

🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲

                  Segmented Segment Tree
                               by Clober

____________/\\\_______________/\\\\\____________/\\\____
 __________/\\\\\___________/\\\\////___________/\\\\\____
  ________/\\\/\\\________/\\\///______________/\\\/\\\____
   ______/\\\/\/\\\______/\\\\\\\\\\\_________/\\\/\/\\\____
    ____/\\\/__\/\\\_____/\\\\///////\\\_____/\\\/__\/\\\____
     __/\\\\\\\\\\\\\\\\_\/\\\______\//\\\__/\\\\\\\\\\\\\\\\_
      _\///////////\\\//__\//\\\______/\\\__\///////////\\\//__
       ___________\/\\\_____\///\\\\\\\\\/_____________\/\\\____
        ___________\///________\/////////_______________\///_____

          4 Layers of 64-bit nodes, hence 464

🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲

### SegmentedSegmentTreeError

```solidity
error SegmentedSegmentTreeError(uint256 errorCode)
```

### Core

```solidity
struct Core {
  mapping(uint256 => uint256)[4] layers;
}
```

### LayerIndex

```solidity
struct LayerIndex {
  uint256 group;
  uint256 node;
}
```

### get

```solidity
function get(struct SegmentedSegmentTree.Core core, uint256 index) internal view returns (uint64 ret)
```

### total

```solidity
function total(struct SegmentedSegmentTree.Core core) internal view returns (uint64)
```

### query

```solidity
function query(struct SegmentedSegmentTree.Core core, uint256 left, uint256 right) internal view returns (uint64 sum)
```

### update

```solidity
function update(struct SegmentedSegmentTree.Core core, uint256 index, uint64 value) internal returns (uint64 replaced)
```

