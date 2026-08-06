// api/mockData.js

// ==============================================================================
// 1. ARTIST ENTITIES (15 Artists with Primary + 2 Fallback Image URLs)
// ==============================================================================

const ARTIST_MJ = {
  id: "artist-mj",
  name: "Michael Jackson",
  type: "artist",
  uri: "spotify:artist:mj",
  genres: ["pop", "r&b", "soul"],
  popularity: 94,
  followers: { total: 40500000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Michael_Jackson_in_1988.jpg/800px-Michael_Jackson_in_1988.jpg" },
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Michael+Jackson" }
  ]
};

const ARTIST_KYGO = {
  id: "artist-kygo",
  name: "Kygo",
  type: "artist",
  uri: "spotify:artist:kygo",
  genres: ["edm", "tropical house", "pop dance"],
  popularity: 84,
  followers: { total: 9200000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kygo_2016.jpg/800px-Kygo_2016.jpg" },
    { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Kygo" }
  ]
};

const ARTIST_GENESIS = {
  id: "artist-genesis",
  name: "Genesis",
  type: "artist",
  uri: "spotify:artist:genesis",
  genres: ["classic rock", "pop rock", "prog rock"],
  popularity: 76,
  followers: { total: 2800000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Genesis_band_1977.jpg/800px-Genesis_band_1977.jpg" },
    { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Genesis" }
  ]
};

const ARTIST_NICKS = {
  id: "artist-nicks",
  name: "Stevie Nicks",
  type: "artist",
  uri: "spotify:artist:nicks",
  genres: ["classic rock", "soft rock", "singer-songwriter"],
  popularity: 78,
  followers: { total: 3100000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Stevie_Nicks_1977.jpg/800px-Stevie_Nicks_1977.jpg" },
    { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Stevie+Nicks" }
  ]
};

const ARTIST_WEEKND = {
  id: "artist-weeknd",
  name: "The Weeknd",
  type: "artist",
  uri: "spotify:artist:weeknd",
  genres: ["pop", "r&b", "contemporary r&b"],
  popularity: 96,
  followers: { total: 85000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Cannes_2023.jpg/800px-The_Weeknd_Cannes_2023.jpg" },
    { url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=The+Weeknd" }
  ]
};

const ARTIST_M83 = {
  id: "artist-m83",
  name: "M83",
  type: "artist",
  uri: "spotify:artist:m83",
  genres: ["synthpop", "indie electronic", "shoegaze"],
  popularity: 81,
  followers: { total: 1250000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/M83_2012.jpg/800px-M83_2012.jpg" },
    { url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=M83" }
  ]
};

const ARTIST_DAFTPUNK = {
  id: "artist-daftpunk",
  name: "Daft Punk",
  type: "artist",
  uri: "spotify:artist:daftpunk",
  genres: ["electro house", "synth funk", "filter house"],
  popularity: 88,
  followers: { total: 12000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Daft_Punk_2013.jpg/800px-Daft_Punk_2013.jpg" },
    { url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Daft+Punk" }
  ]
};

const ARTIST_FLEETWOOD = {
  id: "artist-fleetwood",
  name: "Fleetwood Mac",
  type: "artist",
  uri: "spotify:artist:fleetwood",
  genres: ["classic rock", "soft rock", "pop rock"],
  popularity: 87,
  followers: { total: 14000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fleetwood_Mac_1977.jpg/800px-Fleetwood_Mac_1977.jpg" },
    { url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Fleetwood+Mac" }
  ]
};

const ARTIST_DRAKE = {
  id: "artist-drake",
  name: "Drake",
  type: "artist",
  uri: "spotify:artist:drake",
  genres: ["hip hop", "rap", "pop rap"],
  popularity: 98,
  followers: { total: 82000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/800px-Drake_July_2016.jpg" },
    { url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Drake" }
  ]
};

const ARTIST_SZA = {
  id: "artist-sza",
  name: "SZA",
  type: "artist",
  uri: "spotify:artist:sza",
  genres: ["pop r&b", "alt r&b", "neo soul"],
  popularity: 93,
  followers: { total: 21000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/SZA_2017.jpg/800px-SZA_2017.jpg" },
    { url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=SZA" }
  ]
};

const ARTIST_KENDRICK = {
  id: "artist-kendrick",
  name: "Kendrick Lamar",
  type: "artist",
  uri: "spotify:artist:kendrick",
  genres: ["conscious hip hop", "west coast rap"],
  popularity: 95,
  followers: { total: 32000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Kendrick_Lamar_2018.jpg/800px-Kendrick_Lamar_2018.jpg" },
    { url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Kendrick+Lamar" }
  ]
};

const ARTIST_DUALIPA = {
  id: "artist-dualipa",
  name: "Dua Lipa",
  type: "artist",
  uri: "spotify:artist:dualipa",
  genres: ["dance pop", "nu-disco", "pop"],
  popularity: 91,
  followers: { total: 43000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dua_Lipa_2022_by_Glenn_Francis.jpg/800px-Dua_Lipa_2022_by_Glenn_Francis.jpg" },
    { url: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Dua+Lipa" }
  ]
};

const ARTIST_FRANKOCEAN = {
  id: "artist-frankocean",
  name: "Frank Ocean",
  type: "artist",
  uri: "spotify:artist:frankocean",
  genres: ["alternative r&b", "neo soul", "indie pop"],
  popularity: 89,
  followers: { total: 18000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Frank_Ocean_2012.jpg/800px-Frank_Ocean_2012.jpg" },
    { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Frank+Ocean" }
  ]
};

const ARTIST_TAMEIMPALA = {
  id: "artist-tameimpala",
  name: "Tame Impala",
  type: "artist",
  uri: "spotify:artist:tameimpala",
  genres: ["psychedelic pop", "neo-psychedelia", "indie rock"],
  popularity: 86,
  followers: { total: 11000000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tame_Impala_2019.jpg/800px-Tame_Impala_2019.jpg" },
    { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Tame+Impala" }
  ]
};

const ARTIST_GAMBINO = {
  id: "artist-gambino",
  name: "Childish Gambino",
  type: "artist",
  uri: "spotify:artist:gambino",
  genres: ["hip hop", "funk", "p-funk", "alt r&b"],
  popularity: 85,
  followers: { total: 13500000 },
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Donald_Glover_2018.jpg/800px-Donald_Glover_2018.jpg" },
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Childish+Gambino" }
  ]
};

const ALL_ARTISTS = [
  ARTIST_MJ, ARTIST_KYGO, ARTIST_GENESIS, ARTIST_NICKS, ARTIST_WEEKND,
  ARTIST_M83, ARTIST_DAFTPUNK, ARTIST_FLEETWOOD, ARTIST_DRAKE, ARTIST_SZA,
  ARTIST_KENDRICK, ARTIST_DUALIPA, ARTIST_FRANKOCEAN, ARTIST_TAMEIMPALA, ARTIST_GAMBINO
];


// ==============================================================================
// 2. ALBUM ENTITIES (15 Albums with Primary + 2 Fallback Image URLs)
// ==============================================================================

const ALBUM_THRILLER = {
  id: "album-thriller",
  name: "Thriller",
  album_type: "album",
  release_date: "1982-11-30",
  total_tracks: 9,
  artists: [ARTIST_MJ],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png" },
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Thriller+-+Michael+Jackson" }
  ],
  uri: "spotify:album:thriller"
};

const ALBUM_GOLDEN_HOUR = {
  id: "album-golden-hour",
  name: "Golden Hour",
  album_type: "album",
  release_date: "2020-05-29",
  total_tracks: 18,
  artists: [ARTIST_KYGO],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/6/6d/Kygo_-_Golden_Hour.png" },
    { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Golden+Hour+-+Kygo" }
  ],
  uri: "spotify:album:goldenhour"
};

const ALBUM_GENESIS = {
  id: "album-genesis",
  name: "Genesis",
  album_type: "album",
  release_date: "1983-10-03",
  total_tracks: 9,
  artists: [ARTIST_GENESIS],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/d/dc/Genesis_-_Genesis_%28album%29.jpg" },
    { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Genesis+-+Genesis" }
  ],
  uri: "spotify:album:genesis"
};

const ALBUM_BELLA_DONNA = {
  id: "album-bella-donna",
  name: "Bella Donna",
  album_type: "album",
  release_date: "1981-07-27",
  total_tracks: 10,
  artists: [ARTIST_NICKS],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/3/32/StevieNicksBellaDonna.jpg" },
    { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Bella+Donna+-+Stevie+Nicks" }
  ],
  uri: "spotify:album:belladonna"
};

const ALBUM_STARBOY = {
  id: "album-starboy",
  name: "Starboy",
  album_type: "album",
  release_date: "2016-11-25",
  total_tracks: 18,
  artists: [ARTIST_WEEKND],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" },
    { url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Starboy+-+The+Weeknd" }
  ],
  uri: "spotify:album:starboy"
};

const ALBUM_HURRY_UP = {
  id: "album-hurry-up",
  name: "Hurry Up, We're Dreaming",
  album_type: "album",
  release_date: "2011-10-18",
  total_tracks: 22,
  artists: [ARTIST_M83],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/0/03/M83_-_Hurry_Up%2C_We%27re_Dreaming.png" },
    { url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Hurry+Up+Were+Dreaming+-+M83" }
  ],
  uri: "spotify:album:hurryup"
};

const ALBUM_DISCOVERY = {
  id: "album-discovery",
  name: "Discovery",
  album_type: "album",
  release_date: "2001-03-12",
  total_tracks: 14,
  artists: [ARTIST_DAFTPUNK],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" },
    { url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Discovery+-+Daft+Punk" }
  ],
  uri: "spotify:album:discovery"
};

const ALBUM_RUMOURS = {
  id: "album-rumours",
  name: "Rumours",
  album_type: "album",
  release_date: "1977-02-04",
  total_tracks: 11,
  artists: [ARTIST_FLEETWOOD],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/f/fb/FmRumours.png" },
    { url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Rumours+-+Fleetwood+Mac" }
  ],
  uri: "spotify:album:rumours"
};

const ALBUM_VIEWS = {
  id: "album-views",
  name: "Views",
  album_type: "album",
  release_date: "2016-04-29",
  total_tracks: 20,
  artists: [ARTIST_DRAKE],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg" },
    { url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Views+-+Drake" }
  ],
  uri: "spotify:album:views"
};

const ALBUM_SOS = {
  id: "album-sos",
  name: "SOS",
  album_type: "album",
  release_date: "2022-12-09",
  total_tracks: 23,
  artists: [ARTIST_SZA],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_SOS.png" },
    { url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=SOS+-+SZA" }
  ],
  uri: "spotify:album:sos"
};

const ALBUM_DAMN = {
  id: "album-damn",
  name: "DAMN.",
  album_type: "album",
  release_date: "2017-04-14",
  total_tracks: 14,
  artists: [ARTIST_KENDRICK],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png" },
    { url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=DAMN.+-+Kendrick+Lamar" }
  ],
  uri: "spotify:album:damn"
};

const ALBUM_FUTURE_NOSTALGIA = {
  id: "album-future-nostalgia",
  name: "Future Nostalgia",
  album_type: "album",
  release_date: "2020-03-27",
  total_tracks: 11,
  artists: [ARTIST_DUALIPA],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png" },
    { url: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Future+Nostalgia+-+Dua+Lipa" }
  ],
  uri: "spotify:album:futurenostalgia"
};

const ALBUM_BLONDE = {
  id: "album-blonde",
  name: "Blonde",
  album_type: "album",
  release_date: "2016-08-20",
  total_tracks: 17,
  artists: [ARTIST_FRANKOCEAN],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg" },
    { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Blonde+-+Frank+Ocean" }
  ],
  uri: "spotify:album:blonde"
};

const ALBUM_CURRENTS = {
  id: "album-currents",
  name: "Currents",
  album_type: "album",
  release_date: "2015-07-17",
  total_tracks: 13,
  artists: [ARTIST_TAMEIMPALA],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png" },
    { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Currents+-+Tame+Impala" }
  ],
  uri: "spotify:album:currents"
};

const ALBUM_AWAKEN = {
  id: "album-awaken",
  name: '"Awaken, My Love!"',
  album_type: "album",
  release_date: "2016-12-02",
  total_tracks: 11,
  artists: [ARTIST_GAMBINO],
  images: [
    { url: "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png" },
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop" },
    { url: "https://via.placeholder.com/600x600/121212/ffffff?text=Awaken+My+Love+-+Childish+Gambino" }
  ],
  uri: "spotify:album:awakenmylove"
};

const ALL_ALBUMS = [
  ALBUM_THRILLER, ALBUM_GOLDEN_HOUR, ALBUM_GENESIS, ALBUM_BELLA_DONNA, ALBUM_STARBOY,
  ALBUM_HURRY_UP, ALBUM_DISCOVERY, ALBUM_RUMOURS, ALBUM_VIEWS, ALBUM_SOS,
  ALBUM_DAMN, ALBUM_FUTURE_NOSTALGIA, ALBUM_BLONDE, ALBUM_CURRENTS, ALBUM_AWAKEN
];


// ==============================================================================
// 3. TRACK ENTITIES (15 Featured Tracks)
// ==============================================================================

const TRACK_HUMAN_NATURE = { id: "track-1", name: "Human Nature", uri: "spotify:track:1", duration_ms: 245000, popularity: 85, explicit: false, artists: [ARTIST_MJ], album: ALBUM_THRILLER };
const TRACK_SAVE_MY_LOVE = { id: "track-2", name: "Save My Love", uri: "spotify:track:2", duration_ms: 221000, popularity: 76, explicit: false, artists: [ARTIST_KYGO], album: ALBUM_GOLDEN_HOUR };
const TRACK_THATS_ALL = { id: "track-3", name: "That's All", uri: "spotify:track:3", duration_ms: 265000, popularity: 79, explicit: false, artists: [ARTIST_GENESIS], album: ALBUM_GENESIS };
const TRACK_EDGE_OF_SEVENTEEN = { id: "track-4", name: "Edge of Seventeen", uri: "spotify:track:4", duration_ms: 328000, popularity: 82, explicit: false, artists: [ARTIST_NICKS], album: ALBUM_BELLA_DONNA };
const TRACK_STARBOY = { id: "track-5", name: "Starboy", uri: "spotify:track:5", duration_ms: 230000, popularity: 95, explicit: true, artists: [ARTIST_WEEKND], album: ALBUM_STARBOY };
const TRACK_MIDNIGHT_CITY = { id: "track-6", name: "Midnight City", uri: "spotify:track:6", duration_ms: 243000, popularity: 88, explicit: false, artists: [ARTIST_M83], album: ALBUM_HURRY_UP };
const TRACK_ONE_MORE_TIME = { id: "track-7", name: "One More Time", uri: "spotify:track:7", duration_ms: 320000, popularity: 89, explicit: false, artists: [ARTIST_DAFTPUNK], album: ALBUM_DISCOVERY };
const TRACK_DREAMS = { id: "track-8", name: "Dreams", uri: "spotify:track:8", duration_ms: 257000, popularity: 91, explicit: false, artists: [ARTIST_FLEETWOOD], album: ALBUM_RUMOURS };
const TRACK_PASSIONFRUIT = { id: "track-9", name: "Passionfruit", uri: "spotify:track:9", duration_ms: 298000, popularity: 90, explicit: true, artists: [ARTIST_DRAKE], album: ALBUM_VIEWS };
const TRACK_KILL_BILL = { id: "track-10", name: "Kill Bill", uri: "spotify:track:10", duration_ms: 153000, popularity: 94, explicit: true, artists: [ARTIST_SZA], album: ALBUM_SOS };
const TRACK_DNA = { id: "track-11", name: "DNA.", uri: "spotify:track:11", duration_ms: 185000, popularity: 87, explicit: true, artists: [ARTIST_KENDRICK], album: ALBUM_DAMN };
const TRACK_DONT_START_NOW = { id: "track-12", name: "Don't Start Now", uri: "spotify:track:12", duration_ms: 183000, popularity: 88, explicit: false, artists: [ARTIST_DUALIPA], album: ALBUM_FUTURE_NOSTALGIA };
const TRACK_PINK_WHITE = { id: "track-13", name: "Pink + White", uri: "spotify:track:13", duration_ms: 184000, popularity: 89, explicit: false, artists: [ARTIST_FRANKOCEAN], album: ALBUM_BLONDE };
const TRACK_LESS_I_KNOW = { id: "track-14", name: "The Less I Know The Better", uri: "spotify:track:14", duration_ms: 216000, popularity: 92, explicit: true, artists: [ARTIST_TAMEIMPALA], album: ALBUM_CURRENTS };
const TRACK_REDBONE = { id: "track-15", name: "Redbone", uri: "spotify:track:15", duration_ms: 326000, popularity: 89, explicit: true, artists: [ARTIST_GAMBINO], album: ALBUM_AWAKEN };

const ALL_TRACKS = [
  TRACK_HUMAN_NATURE, TRACK_SAVE_MY_LOVE, TRACK_THATS_ALL, TRACK_EDGE_OF_SEVENTEEN, TRACK_STARBOY,
  TRACK_MIDNIGHT_CITY, TRACK_ONE_MORE_TIME, TRACK_DREAMS, TRACK_PASSIONFRUIT, TRACK_KILL_BILL,
  TRACK_DNA, TRACK_DONT_START_NOW, TRACK_PINK_WHITE, TRACK_LESS_I_KNOW, TRACK_REDBONE
];


// ==============================================================================
// 4. NOW PLAYING TRACK DETAILS
// ==============================================================================

const MOCK_NOW_PLAYING = {
  is_playing: true,
  progress_ms: 74000,
  item: TRACK_HUMAN_NATURE,
  lyrics: {
    track: "Human Nature",
    artist: "Michael Jackson",
    writer: "Steve Porcaro, John Bettis",
    sampleLines: [
      "Looking out across the night time",
      "The city winks a sleepless eye",
      "Hear her voice, shake my window",
      "Sweet seducing sighs"
    ]
  }
};


// ==============================================================================
// 5. PLAYLIST ENTITIES (15 Custom Playlists)
// ==============================================================================

const ALL_PLAYLISTS = [
  { id: "pl-1", name: "SwiftUI & Node Focus", description: "Deep concentration beats for mobile development.", public: true, images: ALBUM_HURRY_UP.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 42 } },
  { id: "pl-2", name: "Tailgate Anthems", description: "High energy bangers for outdoor grilling & festivities.", public: true, images: ALBUM_THRILLER.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 35 } },
  { id: "pl-3", name: "Madden Night Gaming", description: "Competitive playlist for late night console sessions.", public: false, images: ALBUM_STARBOY.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 28 } },
  { id: "pl-4", name: "80s Pop & Synth Classics", description: "Retro synths, classic pop, and timeless funk.", public: true, images: ALBUM_GENESIS.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 50 } },
  { id: "pl-5", name: "Chill Electronic & Tropical", description: "Smooth melodic house and tropical rhythms.", public: true, images: ALBUM_GOLDEN_HOUR.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 31 } },
  { id: "pl-6", name: "Modern R&B & Soul", description: "Smooth vocals, heavy basslines, and late-night grooves.", public: true, images: ALBUM_SOS.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 40 } },
  { id: "pl-7", name: "Classic Rock Heavyweights", description: "Icons of rock from the 70s, 80s, and beyond.", public: true, images: ALBUM_BELLA_DONNA.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 60 } },
  { id: "pl-8", name: "Hip-Hop Hits & Bangers", description: "Top chart-topping rap and hip hop anthems.", public: true, images: ALBUM_DAMN.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 48 } },
  { id: "pl-9", name: "Indie Synth & Dream Pop", description: "Atmospheric, reverberant, and lush audio landscapes.", public: true, images: ALBUM_CURRENTS.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 33 } },
  { id: "pl-10", name: "Gym & Cardio Heavy Hits", description: "Fast tempos to power through heavy lifts and runs.", public: true, images: ALBUM_DISCOVERY.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 45 } },
  { id: "pl-11", name: "Sunday Morning Acoustic", description: "Stripped-back acoustic tracks and laid-back rhythms.", public: true, images: ALBUM_RUMOURS.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 22 } },
  { id: "pl-12", name: "Studio Recording Sessions", description: "Tracks inspired by creative beat-making and songwriting.", public: false, images: ALBUM_BLONDE.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 19 } },
  { id: "pl-13", name: "Road Trip Highway Mix", description: "Cruising music for intercity drives and coastal trips.", public: true, images: ALBUM_VIEWS.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 55 } },
  { id: "pl-14", name: "Sunset Pool Party", description: "Uplifting dance pop and upbeat disco vibes.", public: true, images: ALBUM_FUTURE_NOSTALGIA.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 38 } },
  { id: "pl-15", name: "Late Night Deep Focus", description: "Ambient and low-tempo tracks for night owls.", public: true, images: ALBUM_AWAKEN.images, owner: { display_name: "Mekhi Brodie" }, tracks: { total: 30 } }
];


// ==============================================================================
// 6. EXPORTABLE MOCK USER DATA
// ==============================================================================

const mockUserData = {
  // GET /user/me
  me: {
    display_name: "Mekhi Brodie",
    id: "mekhi_brodie_demo",
    email: "demo.guest@example.com",
    country: "US",
    product: "premium",
    followers: { total: 420 },
    images: [
      { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop" },
      { url: "https://via.placeholder.com/500x500/121212/ffffff?text=Mekhi+Brodie" }
    ]
  },

  // GET /user/currently-playing
  currentlyPlaying: MOCK_NOW_PLAYING,

  // GET /user/top-artists (15 Artists)
  topArtists: {
    href: "https://api.spotify.com/v1/me/top/artists",
    limit: 15,
    total: ALL_ARTISTS.length,
    items: ALL_ARTISTS
  },

  // GET /user/top-tracks (15 Tracks)
  topTracks: {
    href: "https://api.spotify.com/v1/me/top/tracks",
    limit: 15,
    total: ALL_TRACKS.length,
    items: ALL_TRACKS
  },

  // GET /user/playlists (15 Playlists)
  playlists: {
    href: "https://api.spotify.com/v1/me/playlists",
    limit: 15,
    total: ALL_PLAYLISTS.length,
    items: ALL_PLAYLISTS
  },

  // GET /user/recent-tracks (15 Items)
  recentTracks: {
    href: "https://api.spotify.com/v1/me/player/recently-played",
    limit: 15,
    items: ALL_TRACKS.map((track, idx) => ({
      played_at: new Date(Date.now() - (idx + 1) * 3600000).toISOString(),
      track
    }))
  },

  // GET /user/saved-tracks (15 Items)
  savedTracks: {
    href: "https://api.spotify.com/v1/me/tracks",
    limit: 15,
    total: ALL_TRACKS.length,
    items: ALL_TRACKS.map((track, idx) => ({
      added_at: new Date(Date.now() - (idx + 1) * 86400000).toISOString(),
      track
    }))
  },

  // GET /user/saved-albums (15 Items)
  savedAlbums: {
    href: "https://api.spotify.com/v1/me/albums",
    limit: 15,
    total: ALL_ALBUMS.length,
    items: ALL_ALBUMS.map((album, idx) => ({
      added_at: new Date(Date.now() - (idx + 1) * 172800000).toISOString(),
      album
    }))
  }
};


// ==============================================================================
// 7. EXPORTABLE MOCK GLOBAL DATA
// ==============================================================================

const mockGlobalData = {
  // GET /global/new-releases
  newReleases: {
    albums: {
      href: "https://api.spotify.com/v1/browse/new-releases",
      limit: 15,
      total: ALL_ALBUMS.length,
      items: ALL_ALBUMS
    }
  },

  // GET /global/playlist/:id
  playlist: {
    id: "pl-1",
    name: "Portfolio Demo Vibe Check",
    description: "Full guest suite mix featuring 15 landmark tracks and real high-res media.",
    public: true,
    collaborative: false,
    followers: { total: 1250 },
    images: ALBUM_THRILLER.images,
    owner: { id: "mekhi_brodie_demo", display_name: "Mekhi Brodie", type: "user" },
    tracks: {
      href: "https://api.spotify.com/v1/playlists/pl-1/tracks",
      total: ALL_TRACKS.length,
      limit: 100,
      items: ALL_TRACKS.map((track, idx) => ({
        added_at: new Date(Date.now() - (idx + 1) * 43200000).toISOString(),
        added_by: { id: "mekhi_brodie_demo" },
        track
      }))
    }
  },

  // GET /global/album/:id
  album: {
    ...ALBUM_THRILLER,
    label: "Epic / Legacy",
    popularity: 94,
    genres: ["pop", "r&b", "soul"],
    tracks: {
      href: "https://api.spotify.com/v1/albums/album-thriller/tracks",
      limit: 50,
      total: 9,
      items: [
        { id: "tr-1", name: "Wanna Be Startin' Somethin'", duration_ms: 363000, track_number: 1, artists: [ARTIST_MJ] },
        { id: "tr-2", name: "Baby Be Mine", duration_ms: 260000, track_number: 2, artists: [ARTIST_MJ] },
        { id: "tr-3", name: "The Girl Is Mine", duration_ms: 222000, track_number: 3, artists: [ARTIST_MJ] },
        { id: "tr-4", name: "Thriller", duration_ms: 357000, track_number: 4, artists: [ARTIST_MJ] },
        { id: "tr-5", name: "Beat It", duration_ms: 258000, track_number: 5, artists: [ARTIST_MJ] },
        { id: "tr-6", name: "Billie Jean", duration_ms: 294000, track_number: 6, artists: [ARTIST_MJ] },
        { ...TRACK_HUMAN_NATURE, track_number: 7 },
        { id: "tr-8", name: "P.Y.T. (Pretty Young Thing)", duration_ms: 239000, track_number: 8, artists: [ARTIST_MJ] },
        { id: "tr-9", name: "The Lady in My Life", duration_ms: 299000, track_number: 9, artists: [ARTIST_MJ] }
      ]
    }
  },

  // GET /global/search?keyword=...
  search: {
    trackResults: {
      tracks: {
        href: "https://api.spotify.com/v1/search?type=track",
        total: ALL_TRACKS.length,
        items: ALL_TRACKS
      }
    },
    artistResults: {
      artists: {
        href: "https://api.spotify.com/v1/search?type=artist",
        total: ALL_ARTISTS.length,
        items: ALL_ARTISTS
      }
    },
    albumResults: {
      albums: {
        href: "https://api.spotify.com/v1/search?type=album",
        total: ALL_ALBUMS.length,
        items: ALL_ALBUMS
      }
    }
  },

  // GET /global/artist/:id
  artistDetails: {
    artist: ARTIST_MJ,
    artistSongs: {
      tracks: [
        TRACK_HUMAN_NATURE,
        { id: "tr-6", name: "Billie Jean", uri: "spotify:track:billiejean", duration_ms: 294000, popularity: 92, explicit: false, artists: [ARTIST_MJ], album: ALBUM_THRILLER },
        { id: "tr-5", name: "Beat It", uri: "spotify:track:beatit", duration_ms: 258000, popularity: 90, explicit: false, artists: [ARTIST_MJ], album: ALBUM_THRILLER }
      ]
    },
    artistAlbums: {
      href: "https://api.spotify.com/v1/artists/mj/albums",
      total: 2,
      items: [
        ALBUM_THRILLER,
        { id: "album-bad", name: "Bad", album_type: "album", release_date: "1987-08-31", total_tracks: 11, artists: [ARTIST_MJ], images: ALBUM_THRILLER.images, uri: "spotify:album:bad" }
      ]
    }
  }
};


// ==============================================================================
// 8. COMMONJS EXPORT
// ==============================================================================
module.exports = { mockGlobalData, mockUserData };