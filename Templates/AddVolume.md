```meta-bind-button
style: default
label: Add Volume
id: "add-volume"
actions:
  - type: updateMetadata
    bindTarget: volumeCount
    evaluate: true
    value: "x + 1"
  - type: replaceSelf
    replacement: "[[NewVolume]]"
    templater: true
```