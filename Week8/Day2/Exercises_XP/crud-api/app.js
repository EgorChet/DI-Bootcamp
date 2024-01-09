const express = require("express");
const { fetchPosts } = require('./data/dataService');
const app = express();

app.use(express.json());

app.listen(5001, () => {   // PORT 5000 is already in use so i used 5001. As i understood by default Mac uses it for AirPlay.
    console.log("Server listening on port 5001");
})

app.get('/posts', async (req, res) => {
    try {
      const posts = await fetchPosts();
      console.log('Data successfully retrieved and sent as a response');
      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).send('Error fetching posts');
    }
  });