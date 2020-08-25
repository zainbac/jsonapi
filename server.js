const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Worlddd');
});
app.get('/api/courses', (req, res) => {
  res.send([
    {
      title: ' ',
      url:
        'https://www.safe8well.my/image/safe8well/image/data/MobileApps/A829rZyk1591027128.png',
      description: ' ',
      id: 1,
    },
    {
      title: '',
      url:
        'https://www.safe8well.my/image/safe8well/image/data/MobileApps/8oEk8KXL1591024920.png',
      description: '',
      id: 2,
    },

    {
      title: ' ',
      url:
        'https://www.safe8well.my/image/safe8well/image/data/MobileApps/4u3pzu5R1591428659.png',
      description: '',
      id: 4,
    },

    {
      title: ' ',
      url:
        'https://www.safe8well.my/image/safe8well/image/data/MobileApps/dLmTGMj11591428660.png',
      description: ' ',
      id: 6,
    },
    {
      title: ' ',
      url:
        'https://www.safe8well.my/image/safe8well/image/data/MobileApps/e9L6QbPJ1591428662.png',
      description: ' ',
      id: 7,
    },
    {
      title: ' ',
      url:
        'https://www.safe8well.my/image/safe8well/image/data/MobileApps/MDeXRaeI1591429578.png',
      description: ' ',
      id: 8,
    },
    {
      title: ' ',
      url:
        'https://www.safe8well.my/image/safe8well/image/data/MobileApps/SShjS56J1591438165.png',
      description: ' ',
      id: 8,
    },
  ]);
});
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});
//PORT

const port = process.env.PORT || 3400;
app.listen(port, () => console.log('Listening on port ${port}..'));