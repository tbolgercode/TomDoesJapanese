Episode 
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
id: "add-episode"
class: button-add
actions:
  - type: updateMetadata
    bindTarget: episodeCount
    evaluate: true
    value: "x + 1"
  - type: replaceSelf
    replacement: "[[NewEpisode]]"
    templater: true
```