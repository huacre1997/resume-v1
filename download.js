const fs = require('fs');
const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2MwNmIwNjZiMWIwZTQ0NDE5YWJjMzhiODA4NDhjY2FlEgsSBxDcltvJggIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjU2ODAwMTA4NjAxMzg3Njc1MQ&filename=&opi=89354086';

fetch(url)
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('cert_screen.html', text);
    console.log('Downloaded successfully.');
  })
  .catch(err => {
    console.error('Error downloading:', err);
  });
