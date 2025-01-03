Chapter 
```meta-bind-button
style: default
label: Mark Done
id: "mark-done"
class: button-aqua
actions:
  - type: updateMetadata
    bindTarget: progress
    evaluate: true
    value: "x + 1"
  - type: replaceSelf
    replacement: "[[UndoDone]]"
    templater: true
```

```meta-bind-button
style: default
label: +
id: "add-chapter"
class: button-add
actions:
  - type: updateMetadata
    bindTarget: chapterCount
    evaluate: true
    value: "x + 1"
  - type: replaceSelf
    replacement: "[[NewChapter]]"
    templater: true
```