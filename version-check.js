// This file will help diagnose version issues
console.log("Node.js version:", process.version)
console.log("Checking package dependencies...")

const fs = require("fs")
const path = require("path")

try {
  const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"))
  console.log("\nDependencies:")
  console.log(packageJson.dependencies)
  console.log("\nDevDependencies:")
  console.log(packageJson.devDependencies)

  // Check for tailwind.config.js
  const tailwindExists = fs.existsSync("./tailwind.config.js")
  console.log("\nTailwind config exists:", tailwindExists)

  // Check for postcss.config.js
  const postcssExists = fs.existsSync("./postcss.config.js")
  console.log("PostCSS config exists:", postcssExists)

  // Check for globals.css
  const globalsExists = fs.existsSync("./app/globals.css")
  console.log("globals.css exists:", globalsExists)

  // Check if tailwind directives exist in globals.css
  if (globalsExists) {
    const globalsCss = fs.readFileSync("./app/globals.css", "utf8")
    const hasTailwindDirectives =
      globalsCss.includes("@tailwind base") &&
      globalsCss.includes("@tailwind components") &&
      globalsCss.includes("@tailwind utilities")
    console.log("globals.css has Tailwind directives:", hasTailwindDirectives)
  }
} catch (error) {
  console.error("Error reading package.json:", error)
}

