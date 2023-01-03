const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = 2621;

const randomImage = `http://localhost:${PORT}/entity-placeholder.jpg`;

const tracks = [
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'e900bfb6b66fbe8c3bc1dfebc2c74a31a2253377e1c075aad4e19463424634ac',
    name: 'Love You Like a Lover Song',
    albumName: 'When The Sun Goes Down',
    likes: 4500,
    duration: 200,
    artistName: 'Selena Gomez',
    albumId: 'albumId1',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'd0ac8613338e0ce1fb69d9a726e2b8b80a0b7a2ee92b020398ad21f9a3f35205',
    name: 'Bang Bang Bang',
    albumName: 'When The Sun Goes Down',
    likes: 4400,
    duration: 206,
    artistName: 'Selena Gomez',
    albumId: 'albumId1',
  },
  {
    ownerId: 'ownerId2',
    image: randomImage,
    id: '1ca0a80437c057d79e291ac5ddf0d403d4f4556e6b2fd17f60e73d7487758f15',
    name: 'Who Says',
    albumName: 'When The Sun Goes Down',
    likes: 3900,
    duration: 209,
    artistName: 'Selena Gomez',
    albumId: 'albumId2',
  },
  {
    ownerId: 'ownerId2',
    image: randomImage,
    id: '984a42be185a55c078645263d47be65c5092c1f2ffb9f3a015d5a0550a0e021c',
    name: 'We Own The Night',
    albumName: 'When The Sun Goes Down',
    likes: 3400,
    duration: 199,
    artistName: 'Selena Gomez',
    albumId: 'albumId2',
  },
  {
    ownerId: 'ownerId3',
    image: randomImage,
    id: '83ae73af1fd6c676a2c8a07b399bde74567002f126801b5d14dbf2eb1f6e9c01',
    name: 'Hit The Lights',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
    albumId: 'albumId3',
  },
  {
    ownerId: 'ownerId3',
    image: randomImage,
    id: '88dfa3fdb5c25a1bd48ff26bdb7de00a138e00584be2cc267747d8ae2626312b',
    name: 'Whiplash',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
    albumId: 'albumId3',
  },
  {
    ownerId: 'ownerId4',
    image: randomImage,
    id: 'e672095269915fb946e0c7a76b35efb79a2e636f44c3ae87fe615dcdfb900635',
    name: 'When The Sun Goes Down',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
    albumId: 'albumId3',
  },
  {
    ownerId: 'ownerId4',
    image: randomImage,
    id: 'fea2c9e4fa12cebe70201563b47b55ef19fab675afdc206cbd9c4c60eebb883e',
    name: 'My Dilemma',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
    albumId: 'albumId4',
  },
  {
    ownerId: 'ownerId4',
    image: randomImage,
    id: 'ef705972dbc2b3468cbba863d6c8de7e1add28c968828421e96d58e6c73a57f8',
    name: 'That\'s More Like It',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
    albumId: 'albumId4',
  },
  {
    ownerId: 'ownerId5',
    image: randomImage,
    id: '072b89cf56f8f9c2908c51cbbd19eb02eaa3e42bbc2cd88b168a2113ffdb181c',
    name: 'Middle Of Nowhere',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
    albumId: 'albumId4',
  },
  {
    ownerId: 'ownerId5',
    image: randomImage,
    id: 'ef5be7360b2b69b012f8709ede883711f2cdac125ade9f2564503adad90ff744',
    name: 'Dices',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
    albumId: 'albumId5',
  }
];

const albums = [
  {
    image: randomImage,
    name: 'When The Sun Goes Down',
    id: 'albumId1',
    artistId: 1,
    artistName: 'Selena Gomez',
    releaseDate: 1654104465,
    ownerId: 'ownerId1'
  },
  {
    image: randomImage,
    name: 'Rare',
    id: 'albumId2',
    artistId: 1,
    artistName: 'Selena Gomez',
    releaseDate: 1654104465,
    ownerId: 'ownerId1'
  },
  {
    image: randomImage,
    name: 'Stars Dance',
    id: 'albumId3',
    artistId: 1,
    artistName: 'Selena Gomez',
    releaseDate: 1654104465,
    ownerId: 'ownerId1',
  },
  {
    image: randomImage,
    name: 'Rivival (Delux)',
    id: 'albumId4',
    artistId: 1,
    artistName: 'Selena Gomez',
    releaseDate: 1559679652,
    ownerId: 'ownerId1',
  }
];

const playlists = [
  {
    name: '90\'s R&B Selection',
    id: 1,
    ownerId: 'ownerId1',
    creationDate: 1654104465,
    image: randomImage,
    tracks: tracks
  },
  {
    name: 'Holiday Selection',
    id: 2,
    ownerId: 'ownerId1',
    creationDate: 1654104465,
    image: randomImage,
    tracks: tracks
  },
  {
    name: 'Workout Selection',
    id: 3,
    ownerId: 'ownerId1',
    creationDate: 1654104465,
    image: randomImage,
    tracks: tracks
  },
];

const artists = [
  {
    image: randomImage,
    name: 'Selena Gomez',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda quod nisi illo quasi soluta labore ad harum molestiae quis esse, voluptate blanditiis?',
    id: 1,
    ownerId: 'ownerId1',
    albums: [1, 2, 3]
  },
  {
    image: randomImage,
    name: 'Justin Bieber',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda quod nisi illo quasi soluta labore ad harum molestiae quis esse, voluptate blanditiis?',
    id: 2,
    ownerId: 'ownerId1',
    albums: [4]
  },
  {
    image: randomImage,
    name: 'Taylor Swift',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda quod nisi illo quasi soluta labore ad harum molestiae quis esse, voluptate blanditiis?',
    id: 3,
    ownerId: 'ownerId1',
    albums: [5]
  },
  {
    image: randomImage,
    name: 'Ariana Grande',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda quod nisi illo quasi soluta labore ad harum molestiae quis esse, voluptate blanditiis?',
    id: 4,
    ownerId: 'ownerId1',
    albums: [6, 7]
  }
];


const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'static')))

app.get('/recentlyPlayed', (req, res) => {
  res.json([
    tracks[0],
    tracks[1],
    albums[0],
    albums[1],
    playlists[0],
  ]);
});

app.get('/albums/:id', (req, res) => {
  res.json(albums[0]);
});

app.get('/albums/:id/tracks', (req, res) => {
  res.json(tracks);
});

app.get('/albums', (req, res) => {
  res.json(albums);
});

app.get('/artists/:id/albums', (req, res) => {
  res.json(albums);
});

app.get('/artists/:id/tracks', (req, res) => {
  res.json(tracks);
});

app.get('/artists/:id', (req, res) => {
  res.json(artists[0]);
});

app.get('/artists', (req, res) => {
  res.json(artists);
});

app.get('/playlists/:id/tracks', (req, res) => {
  res.json(tracks);
});

app.get('/playlists/:id', (req, res) => {
  res.json(playlists[0]);
});

app.get('/playlists', (req, res) => {
  res.json(playlists);
});

app.get('/users/:address/albums', (req, res) => {
  res.json(albums);
});

app.get('/users/:address/tracks', (req, res) => {
  res.json(tracks);
});

app.get('/search/:query', (req, res) => {
  res.json({
    tracks: [tracks[0]],
    albums: [albums[0], albums[1]],
    playlists: [playlists[0]],
    artists: [artists[0], artists[1]],
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
