import { v4 as uuidv4 } from "uuid";

const colors = [
	"bg-red-100",
	"bg-green-100",
	"bg-blue-100",
	"bg-yellow-100",
	"bg-purple-100",
	"bg-white",
];
export const todoTestItems = [
	{ id: uuidv4(), text: "Learn TypeScript", color: colors[0] },
	{ id: uuidv4(), text: "Build a React app", color: colors[1] },
	{ id: uuidv4(), text: "Write unit tests", color: colors[2] },
	{ id: uuidv4(), text: "Deploy to production", color: colors[3] },
	{ id: uuidv4(), text: "Code review", color: colors[4] },
	{ id: uuidv4(), text: "Update documentation", color: colors[5] },
	{ id: uuidv4(), text: "Fix bugs", color: colors[0] },
	{ id: uuidv4(), text: "Refactor code", color: colors[1] },
	{ id: uuidv4(), text: "Add new features", color: colors[2] },
	{ id: uuidv4(), text: "Optimize performance", color: colors[3] },
];
