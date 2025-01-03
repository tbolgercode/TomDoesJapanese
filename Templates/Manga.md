```js quickadd
var volumeCount = parseInt(await this.quickAddApi.inputPrompt("Volume Count"));

const genres = ["other", "action", "fantasy", "sci-fi", "slice of life", "romance", "horror", "comedy"];

var genre = parseInt(await this.quickAddApi.suggester(genres, genres.map((x, idx) => idx)));

let result = "";
const frontMatter = `---
difficulty: 
rating: 
status: 0
progress: 0
genre: ${genre}
volumeCount: ${volumeCount}
timeSpent: 0
type: 1
---\n`

const statusSection = `# Status \n`;

const timeTrackerSection = `# Time Tracker
\`BUTTON[subtract-fiveMinutes,subtract-halfHour,subtract-hour,add-hour,add-halfHour,add-fiveMinutes]\`
`;

const timeTrackerButtons = `\`\`\`meta-bind-button
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
\`\`\` \n
\`\`\`meta-bind-button
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
\`\`\`
\`\`\`meta-bind-button
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
\`\`\`
\`\`\`meta-bind-button
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
\`\`\` \n
\`\`\`meta-bind-button
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
\`\`\` \n
\`\`\`meta-bind-button
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
\`\`\`
`;

const progressSection = `# Progress \n\n`;

let volumeSection = `
## Volumes
---
`
for(let i = 1; i <= volumeCount; i++){
volumeSection += `
Volume ${i}
\`\`\`meta-bind-button
style: default
label: Mark Done
id: "mark-done"
class: button-aqua
actions:\n
  - type: updateMetadata
    bindTarget: progress
    evaluate: true
    value: "x + 1"
  - type: replaceSelf
    replacement: "[[UndoDone]]"
    templater: true
\`\`\`
`;
}

const addButton = `
\`\`\`meta-bind-button
style: default
label: +
id: "add-volume"
class: button-add
actions:
  - type: updateMetadata
    bindTarget: volumeCount
    evaluate: true
    value: "x + 1"
  - type: replaceSelf
    replacement: "[[NewVolume]]"
    templater: true
\`\`\`
`;

const detailsSection = `\n# Details\n---\n`

return frontMatter + 
statusSection + 
timeTrackerSection +
progressSection + 
volumeSection + 
addButton + 
detailsSection +
timeTrackerButtons;
```

