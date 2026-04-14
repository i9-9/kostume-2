const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "../public/img_carrousel_abr_14_opt");

const files = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith(".webp"))
  .sort((a, b) => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    return numA - numB;
  });

const usedNames = {};
const renames = [];

for (const file of files) {
  // Remove leading number and spaces, normalize spaces to underscores, uppercase
  const withoutNumber = file.replace(/^\d+\s+/, "").replace(".webp", "");
  const clean = withoutNumber.trim().replace(/\s+/g, "_").toUpperCase();

  // Handle duplicates
  const count = usedNames[clean] || 0;
  usedNames[clean] = count + 1;
  const newName = count === 0 ? `${clean}.webp` : `${clean}_${count + 1}.webp`;

  renames.push({ from: file, to: newName });
}

console.log("Renombrando archivos:\n");
for (const { from, to } of renames) {
  fs.renameSync(path.join(DIR, from), path.join(DIR, to));
  console.log(`  ${from.padEnd(35)} → ${to}`);
}

console.log(`\n✓ ${renames.length} archivos renombrados`);
