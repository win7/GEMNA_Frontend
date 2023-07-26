import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export const menuEntries = [
	{
		section_title: "Applications"
	},
	{
		id: uniqueID(),
		title: "Chat",
		icon: "mdi mdi-message-outline",
		page: "/pages/chat"
	},
	{
		section_title: "Menu"
	},
	{
		id: uniqueID(),
		title: "Analysis",
		page: "/dashboard",
		icon: "mdi mdi-view-dashboard-variant",
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
				title: "Dashboard 1",
				page: "/dashboard/v1"
			},
			{
				id: uniqueID(),
				title: "Dashboard 2",
				page: "/dashboard/v2"
			}
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
