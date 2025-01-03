```meta-bind-js-view
{episodeCount} as episodeCount
---
const str = 
`\`\`\`meta-bind
INPUT[progressBar(maxValue(${context.bound.episodeCount})):progress]
\`\`\``;
return engine.markdown.create(str);
```
