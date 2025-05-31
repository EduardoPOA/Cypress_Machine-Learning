// plugins/index.js

const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  on('task', {
    listFiles(directory) {
      // Implement the logic to list files in the specified directory
      const fullPath = path.join(process.cwd(), directory); // Resolve the full path

      try {
        const files = fs.readdirSync(fullPath);
        return files;
      } catch (error) {
        throw new Error(`Error listing files in ${directory}: ${error.message}`);
      }
    },
  });
};
