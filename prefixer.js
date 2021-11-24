const fs = require('fs');
const path = require('path');
const prefix = "su-"

function walk(filePath) {
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      files.forEach(function (filename) {
        const file_dir = path.join(filePath, filename);
        fs.stat(file_dir, function (err, stats) {
          if (err) {
            console.warn('fetch file status error:', err);
          } else {
            const isFile = stats.isFile();
            const isDir = stats.isDirectory();
            if (isFile && file_dir.endsWith('.scss')) {
              try {
                replace(file_dir)
              } catch (e) {
                console.log('parse error:', file_dir)
              }

            }
            if (isDir) {
              walk(file_dir);
            }
          }
        })
      });
    }
  });
}

function replace(filePath) {
  let content = fs.readFileSync(filePath)
  console.log(content.toString())
}

walk('./projects/lib/src/bootstrap/scss')
