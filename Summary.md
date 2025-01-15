---
cssclasses:
  - max-table-width
---
# At a Glance
---
## Study/Immersion Log:
```dataviewjs 

let formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const localDate = `${year}-${month}-${day}`;
  return localDate;
};

const calendarData = {
	colors: {    // (optional) defaults to green
		blue: ["#b2ecf7", "#94c1f7", "#5865f5", "#8556f5", "#9c46f2", "#8114a6", "#6b035d", "#5c0028"]
	},
	showCurrentDayBorder: true, 
	intensityScaleStart: 0,
	intensityScaleEnd: 6,
	entries: [],                
};

//DataviewJS loop
for (let page of dv.pages('"Journals"')) {

	calendarData.entries.push({
		date: formatDate(new Date(page.studyJournalDate)),
		intensity: page.studyDifficulty,
		color: "blue"
	})
};

renderHeatmapCalendar(this.container, calendarData);

```
---
```dataviewjs
const pages = dv.pages('"Content"');

let hoursTotal = 0.0;

pages.forEach(page => {
	hoursTotal += page.file.frontmatter["timeSpent"] / 60.0;	
});

dv.header(2, `Immersion Time (Hours): ${hoursTotal.toFixed(2)}`);

const chartDataRepresentation = {};

const filesSummaryLookup = new Map([
	 [0, {
		title: "Anime",
		hoursWatched: 0.0,
		count: 0,
		stateCounts: new Map([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		]),
		backgroundColor: "#1a91d6",
		borderColor: "#0f5680"}
		],
	[1, {
		title: "Manga",
		hoursWatched: 0.0,
		count: 0,
		stateCounts: new Map([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		]),
		backgroundColor: "#741be0",
		borderColor: "#47118a"}
		],
	[2, {
		title: "Movie",
		hoursWatched: 0.0,
		count: 0,
		stateCounts: new Map([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		]),
		backgroundColor: "#c418a8",
		borderColor: "#870f73"}
		],
	[3, {
		title: "Light Novel",
		hoursWatched: 0.0,
		count: 0,
		stateCounts: new Map([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		]),
		backgroundColor: "#11992a",
		borderColor: "#0c6e1e"}
		],
	[4, {
		title: "Drama",
		hoursWatched: 0.0,
		count: 0,
		stateCounts: new Map([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		]),
		backgroundColor: "#ed8515",
		borderColor: "#b56510"}		
		],
	[5, {
		title: "YouTube",
		hoursWatched: 0.0,
		count: 0,
		stateCounts: new Map([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		]),
		backgroundColor: "#a60000",
		borderColor: "#730000"}		
		]
]);

if(pages && pages.length >= 1){
	pages.forEach(page => {
		//big maths
		const filesSummary = filesSummaryLookup.get(parseInt(page.file.frontmatter["type"]));
		filesSummary.hoursWatched += page.file.frontmatter["timeSpent"] / 60.0;
		filesSummary.count++;
		const fileState = parseInt(page.file.frontmatter["status"]);
		filesSummary.stateCounts.set(fileState, filesSummary.stateCounts.get(fileState) + 1);
	});
	const chartData = {
	    type: 'doughnut',
	    data: {
	        labels: Array.from(filesSummaryLookup.values())
		        .map(x => x.title),
	        datasets: [{
	            data: Array.from(filesSummaryLookup.values())
		        .map(x => x.hoursWatched.toFixed(2)),
	            backgroundColor: Array.from(filesSummaryLookup.values())
		        .map(x => x.backgroundColor),
	            borderColor: Array.from(filesSummaryLookup.values())
		        .map(x => x.borderColor),
	            borderWidth: 5
	        }]
	    }
	}

	window.renderChart(chartData, this.container);
	
}else{
	dv.header(1, "Immersion Summary Chart Not Available :(");
}

dv.header(2, "Number of Entries:")
filesSummaryLookup.forEach(summary => {
	dv.header(3, `${summary.title}: ${summary.count}`);
})

//Building out completion status table

//remove youtube as an option as it cannot be finished in million lifetimes
filesSummaryLookup.delete(5);

const contentStates = ["Not Started", "In Progress", "Abandoned", "Finished"];

//build out body
let tableString = "||";
const fileSummaries = Array.from(filesSummaryLookup.values());

//build header and separator
fileSummaries.forEach((fileSummary) =>{
	tableString += ` ${fileSummary.title} |`;
})
tableString += "\n| --- |";
fileSummaries.forEach((fileSummary) =>{
	tableString += ` --- |`;
})
tableString += "\n|";

//build for each row, add each column
for(let i = 0; i < contentStates.length; i++){
	tableString += ` ${contentStates[i]} |`;
	fileSummaries.forEach((fileSummary) =>{
		tableString += ` ${fileSummary.stateCounts.get(i)} |`;
	});

	tableString += "\n|";
}

tableString = tableString.slice(0, -1);

dv.span(tableString);
dv.span("<small>*1 Season of a show is counted as 1 in this chart.</small>");
dv.span("<br>");
dv.span("<small>*1 Volume Series of a manga is counted as 1 in this chart.</small>");
```
---
```dataviewjs
const pages = dv.pages('"Study"');

let hoursTotal = 0.0;

pages.forEach(page => {
	hoursTotal += page.file.frontmatter["timeSpent"] / 60.0;	
});

dv.header(2, `Study Time (Hours): ${hoursTotal.toFixed(2)}`);

const chartDataRepresentation = {};

const filesSummaryLookup = new Map([
	 [0, {
		title: "Anki",
		hoursSpent: 0.0,		
		backgroundColor: "#1a91d6",
		borderColor: "#0f5680"}
		],
	[1, {
		title: "Bunpro",
		hoursSpent: 0.0,
		backgroundColor: "#741be0",
		borderColor: "#47118a"}
		],
	[2, {
		title: "Wanikani",
		hoursSpent: 0.0,
		backgroundColor: "#c418a8",
		borderColor: "#870f73"}
		]
]);

if(pages && pages.length >= 1){
	pages.forEach(page => {
		//big maths
		filesSummaryLookup.get(parseInt(page.file.frontmatter["type"]))
		.hoursSpent += page.file.frontmatter["timeSpent"] / 60.0;
		
	});
	const chartData = {
	    type: 'doughnut',
	    data: {
	        labels: Array.from(filesSummaryLookup.values())
		        .map(x => x.title),
	        datasets: [{
	            data: Array.from(filesSummaryLookup.values())
		        .map(x => x.hoursSpent.toFixed(2)),
	            backgroundColor: Array.from(filesSummaryLookup.values())
		        .map(x => x.backgroundColor),
	            borderColor: Array.from(filesSummaryLookup.values())
		        .map(x => x.borderColor),
	            borderWidth: 5
	        }]
	    }
	}

	window.renderChart(chartData, this.container);
	
}else{
	dv.header(1, "Study Summary Chart Not Available :(");
}
```
