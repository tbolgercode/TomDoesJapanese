```meta-bind-button
style: default
label: Undo?
id: "undo-done"
actions:
  - type: updateMetadata
    bindTarget: progress
    evaluate: true
    value: "x - 1"
  - type: replaceSelf
    replacement: "[[MarkDone]]"
    templater: true
```