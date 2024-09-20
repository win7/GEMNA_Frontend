import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export const menuEntries = [
	{
		section_title: "Home"
	},
	{
		id: uniqueID(),
		title: "Explained",
		icon: "mdi mdi-message-outline",
		page: "/"
	},
	{
		section_title: "Menu"
	},
	{
		id: uniqueID(),
		title: "Analysis",
		page: "/dashboard",
		icon: "mdi mdi-filter-outline",
		isOpen: false,
		level: 0,
		submenu: [
			{
				id: uniqueID(),
				title: "Process",
				page: "/wizard"
			},
			{
				id: uniqueID(),
				title: "Finetune",
				page: "/finetune"
			},
			{
				id: uniqueID(),
				title: "Visualization",
				page: "/data_visualization"
			},
		]
	},
];

// get all titles
// const titles = [];
// function deepFind (key, list) {
// 	list.forEach((entry) => {
// 		if(entry[key]) {
// 			titles.push(entry[key])
// 		}
// 		if(entry.submenu) {
// 			deepFind('title', entry.submenu)
// 		}
// 	})
// };
// deepFind('title', menuEntries);
// console.log(titles);
