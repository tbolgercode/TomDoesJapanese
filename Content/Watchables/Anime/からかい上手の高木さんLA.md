---
difficulty:
rating:
status: 1
progress: 4
genre: 4
episodeCount: 8
timeSpent: 240
type: 0
---
# Status 
```meta-bind
INPUT[select(
option(0, Not Yet Started), 
option(1, In Progress), 
option(2, Abandoned),
option(3, Finished)
):status]
```
# Time Tracker
`BUTTON[subtract-fiveMinutes,subtract-halfHour,subtract-hour,add-hour,add-halfHour,add-fiveMinutes]`
# Progress 
```meta-bind-js-view
{episodeCount} as episodeCount
---
const str = 
`\`\`\`meta-bind
INPUT[progressBar(maxValue(${context.bound.episodeCount})):progress]
\`\`\``;
return engine.markdown.create(str);
```

## Episodes
---
Episode 1
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

Episode 2
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

Episode 3
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

Episode 4
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

Episode 5
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

Episode 6
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

Episode 7
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

Episode 8
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

# Details
---
```meta-bind-button
style: default
label: +1 Hour
id: "add-hour"
class: button-tertiary
hidden: true
actions:
  - type: updateMetadata
    bindTarget: timeSpent
    evaluate: true
    value: "x + 60"
``` 

```meta-bind-button
style: default
label: -1 Hour
id: "subtract-hour"
hidden: true
class: button-tertiary
actions:
  - type: updateMetadata
    bindTarget: timeSpent
    evaluate: true
    value: "x - 60"
```
```meta-bind-button
style: default
label: -30 Min
id: "subtract-halfHour"
hidden: true
class: button-secondary
actions:
  - type: updateMetadata
    bindTarget: timeSpent
    evaluate: true
    value: "x - 30"
```
```meta-bind-button
style: default
label: +30 Min
id: "add-halfHour"
hidden: true
class: button-secondary
actions:
  - type: updateMetadata
    bindTarget: timeSpent
    evaluate: true
    value: "x + 30"
``` 

```meta-bind-button
style: default
label: +5 Min
id: "add-fiveMinutes"
hidden: true
class: button-primary
actions:
  - type: updateMetadata
    bindTarget: timeSpent
    evaluate: true
    value: "x + 5"
``` 

```meta-bind-button
style: default
label: -5 Min
id: "subtract-fiveMinutes"
hidden: true
class: button-primary
actions:
  - type: updateMetadata
    bindTarget: timeSpent
    evaluate: true
    value: "x - 5"
```
