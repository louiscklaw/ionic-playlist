import fs from 'fs';
import path from 'path';

function removeNodeModules(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') {
        fs.rmSync(fullPath, { recursive: true });
      } else if (entry.name === '.next') {
        fs.rmSync(fullPath, { recursive: true });
      } else {
        removeNodeModules(fullPath);
      }
    }
  }
}

removeNodeModules('./');
console.log("All 'node_modules, .next' directories have been removed.");
