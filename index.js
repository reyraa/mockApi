const express = require('express');
const cors = require('cors');

const randomImage = './random-image.jpg';

const tracks = [
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-1',
    name: 'Love You Like a Lover Song',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 4500,
    duration: 200,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-2',
    name: 'Bang Bang Bang',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 4400,
    duration: 206,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-3',
    name: 'Who Says',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3900,
    duration: 209,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-4',
    name: 'We Own The Night',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3400,
    duration: 199,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-5',
    name: 'Hit The Lights',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-6',
    name: 'Whiplash',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-7',
    name: 'When The Sun Goes Down',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-8',
    name: 'My Dilemma',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-9',
    name: 'That\'s More Like It',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-10',
    name: 'Middle Of Nowhere',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
  },
  {
    ownerId: 'ownerId1',
    image: randomImage,
    id: 'track-id-11',
    name: 'Dices',
    albumId: 'album-id-1',
    albumName: 'When The Sun Goes Down',
    likes: 3300,
    duration: 176,
    artistName: 'Selena Gomez',
  }
];

const albums = [
  {
    image: randomImage,
    name: 'When The Sun Goes Down',
    id: 'album-id-1',
    artistId: 'artistId1',
    artistName: 'Selena Gomez',
    releaseDate: 1654104465,
    ownerId: 'ownerId1'
  },
  {
    image: randomImage,
    name: 'Rare',
    id: 'album-id-2',
    artistId: 'artistId1',
    artistName: 'Selena Gomez',
    releaseDate: 1654104465,
    ownerId: 'ownerId1'
  },
  {
    image: randomImage,
    name: 'Stars Dance',
    id: 'album-id-3',
    artistId: 'artistId1',
    artistName: 'Selena Gomez',
    releaseDate: 1654104465,
    ownerId: 'ownerId1',
  },
  {
    image: randomImage,
    name: 'Rivival (Delux)',
    id: 'album-id-1',
    artistId: 'artist-id-1',
    artistName: 'Selena Gomez',
    releaseDate: 1559679652,
    ownerId: 'ownerId1',
  }
];

const playlists = [
  {
    name: '90\'s R&B Selection',
    id: 'playlist-id-1',
    ownerId: 'ownerId1',
    creationDate: 1654104465,
    image: randomImage,
    tracks: tracks
  },
  {
    name: 'Holiday Selection',
    id: 'playlist-id-2',
    ownerId: 'ownerId1',
    creationDate: 1654104465,
    image: randomImage,
    tracks: tracks
  },
  {
    name: 'Workout Selection',
    id: 'playlist-id-3',
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
    id: 'artist-id-1',
    ownerId: 'ownerId1',
    albums: ['album-id-1', 'album-id-2', 'album-id-3']
  },
  {
    image: randomImage,
    name: 'Justin Bieber',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda quod nisi illo quasi soluta labore ad harum molestiae quis esse, voluptate blanditiis?',
    id: 'artist-id-2',
    ownerId: 'ownerId1',
    albums: ['album-id-4']
  },
  {
    image: randomImage,
    name: 'Taylor Swift',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda quod nisi illo quasi soluta labore ad harum molestiae quis esse, voluptate blanditiis?',
    id: 'artist-id-3',
    ownerId: 'ownerId1',
    albums: ['album-id-5']
  },
  {
    image: randomImage,
    name: 'Ariana Grande',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis assumenda quod nisi illo quasi soluta labore ad harum molestiae quis esse, voluptate blanditiis?',
    id: 'artist-id-4',
    ownerId: 'ownerId1',
    albums: ['album-id-6', 'album-id-7']
  }
];


const app = express();
app.use(cors());

app.get('/recentlyPlayed', (req, res) => {
  res.json([
    tracks[0],
    tracks[1],
    albums[0],
    albums[1],
    playlists[0],
  ]);
});

app.get('/album/:id', (req, res) => {
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

app.listen(3001, () => {
  console.log('Server started on port 3000');
});
