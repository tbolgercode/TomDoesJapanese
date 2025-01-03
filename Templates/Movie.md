```js quickadd
const genres = ["other", "action", "fantasy", "sci-fi", "slice of life", "romance", "horror", "comedy"];

var genre = parseInt(await this.quickAddApi.suggester(genres, genres.map((x, idx) => idx)));

const frontMatter = `---
difficulty: 
rating: 
status: 0
progress: 0
genre: ${genre}
timeSpent: 0
type: 2
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

const detailsSection = `\n# Details\n---\n`;

return frontMatter + 
statusSection + 
timeTrackerSection +
detailsSection + 
timeTrackerButtons;
```

