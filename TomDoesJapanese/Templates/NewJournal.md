```js quickadd
const difficulties = ["Very Easy", "Easy", "Somewhat Easy", "Normal", "Somewhat Difficult", "Difficult", "Very Difficult"];

var studyDifficulty = parseInt(await this.quickAddApi.suggester(difficulties, difficulties.map((x, idx) => idx)));

const date = new Date();

const frontMatter = `---
studyJournalDate: ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}
studyDifficulty: ${studyDifficulty}
---\n`

return frontMatter
```
# {{DATE:dddd, MMMM D yyyy}}
---
# "{{VALUE:quote}}"

## *-{{VALUE:author}}*


### A Brief Summary:
---
Nothing new to report.

### Study Checklist:
---
- [ ] Bunpro
- [ ] Wanikani
- [ ] Anki (if applicable)
- [ ] Immersion (2+ hours)

#### Quick Links
---
###### Study Logs:
[[Wanikani]]
[[BunPro]]
[[Anki]]