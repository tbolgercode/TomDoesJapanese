```meta-bind-button
style: default
label: Add Episode
id: "add-episode"
actions:
  - type: updateMetadata
    bindTarget: episodeCount
    evaluate: true
    value: "x + 1"
  - type: replaceSelf
    replacement: "[[NewEpisode]]"
    templater: true
```