const colors = [
  "bg-red-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-white",
];

export const todoTestItems = [
    { id: "1", text: "Learn TypeScript", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "2", text: "Build a React app", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "3", text: "Write unit tests", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "4", text: "Deploy to production", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "5", text: "Code review", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "6", text: "Update documentation", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "7", text: "Fix bugs", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "8", text: "Refactor code", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "9", text: "Add new features", color: colors[Math.floor(Math.random() * colors.length)] },
    { id: "10", text: "Optimize performance", color: colors[Math.floor(Math.random() * colors.length)] },
];
