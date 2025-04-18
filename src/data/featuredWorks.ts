import { FeaturedWorkItem } from '@/types/featuredWork';

const orderedSpotifyWorks = [
  {
    type: "spotify" as const,
    artist: "Addison Jordan",
    title: "Reverence",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/2N8ATWkeG3Qks1KaZzas2C",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02d8351852e90bd7174b66bbd2",
    spotifyId: "2N8ATWkeG3Qks1KaZzas2C"
  },
  {
    type: "spotify" as const,
    artist: "Sophie Drago",
    title: "Perfect Show",
    role: "Production, Recording, Mixing",
    url: "https://open.spotify.com/track/5EAtwsiuev9rDNBjaDNug7",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "5EAtwsiuev9rDNBjaDNug7"
  },
  {
    type: "spotify" as const,
    artist: "Quentin Moore Ft. Snoop Dogg",
    title: "BFU (Remix)",
    role: "Recording",
    url: "https://open.spotify.com/track/3HgwUyJXSP1i5j4ZVxjvC7",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "3HgwUyJXSP1i5j4ZVxjvC7"
  },
  {
    type: "spotify" as const,
    artist: "Prisha Mehta",
    title: "Leaving you (For now)",
    role: "Production, Recording, Mixing",
    url: "https://open.spotify.com/track/4GxH4w1kwuR7VtbBWpALn1",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a75a1812fd13985527108f12",
    spotifyId: "4GxH4w1kwuR7VtbBWpALn1"
  },
  {
    type: "spotify" as const,
    artist: "Mike Jones",
    title: "Slums",
    role: "Recording",
    url: "https://open.spotify.com/track/0sG5nT03mSwzW4kg5xXcWL",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e0266937507c23c123c73ca032a",
    spotifyId: "0sG5nT03mSwzW4kg5xXcWL"
  },
  {
    type: "spotify" as const,
    artist: "Bobby Sparks II",
    title: "Letter to Mumbai",
    role: "Production, Recording",
    url: "https://open.spotify.com/track/7wxjnfO4CBkgQodEwqP7Gu",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e023121eeed397d8c7d7cf334b5",
    spotifyId: "7wxjnfO4CBkgQodEwqP7Gu"
  },
  {
    type: "spotify" as const,
    artist: "Shama Judah",
    title: "Shikwa",
    role: "Mixing, Mastering",
    url: "https://open.spotify.com/track/3TOeHJ8Y08UqsiEaIFVs0V",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "3TOeHJ8Y08UqsiEaIFVs0V"
  },
  {
    type: "spotify" as const,
    artist: "Nibal Malshi",
    title: "Isma' Albi",
    role: "Production, Recording, Mixing",
    url: "https://open.spotify.com/track/5CkPDhVkqmjNqRTtfmltFx",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "5CkPDhVkqmjNqRTtfmltFx"
  },
  {
    type: "spotify" as const,
    artist: "Zak Azoury",
    title: "Christmas Love",
    role: "Production, Recording, Mixing",
    url: "https://open.spotify.com/track/4uhAogfaSYeCApgDxs76Zt",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "4uhAogfaSYeCApgDxs76Zt"
  },
  {
    type: "spotify" as const,
    artist: "Quentin Moore",
    title: "I Believe in You (String Sextet Version)",
    role: "Mixing",
    url: "https://open.spotify.com/track/1XYQu1bG2b8qA7ttN1v1Aj",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "1XYQu1bG2b8qA7ttN1v1Aj"
  },
  {
    type: "spotify" as const,
    artist: "XLR - Movement Band",
    title: "Movement Band",
    role: "Mixing",
    url: "https://open.spotify.com/track/3DWZzdAUXdJq0qV9Wuwr16",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "3DWZzdAUXdJq0qV9Wuwr16"
  },
  {
    type: "spotify" as const,
    artist: "DarronT",
    title: "Iced Out",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/78kgg5DNSCQzkkOPhOg4YK",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "78kgg5DNSCQzkkOPhOg4YK"
  },
  {
    type: "spotify" as const,
    artist: "Sabina Chamoy",
    title: "Full Moon",
    role: "Co-Production, Recording, Mixing",
    url: "https://open.spotify.com/track/0V9qPX7t1nTVPMUQ7wjapf",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "0V9qPX7t1nTVPMUQ7wjapf"
  },
  {
    type: "spotify" as const,
    artist: "PlugnSessions",
    title: "Burnaboy Mix",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/7kyJwTQY6pmyqy0Rd4Mdin",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "7kyJwTQY6pmyqy0Rd4Mdin"
  },
  {
    type: "spotify" as const,
    artist: "Jay O'Jay, Fata El Presidente",
    title: "Collaboration",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/0xbHdlnPvcq4deDC867KZ8",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "0xbHdlnPvcq4deDC867KZ8"
  },
  {
    type: "spotify" as const,
    artist: "PlugnSessions",
    title: "Praise & Worship (Live)",
    role: "Recording",
    url: "https://open.spotify.com/track/1bKfBCxJzjiRjRMy3RYtXh",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "1bKfBCxJzjiRjRMy3RYtXh"
  },
  {
    type: "spotify" as const,
    artist: "Addison Jordan, Madison Russll",
    title: "Collaboration",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/14JogKQFdICwWmzpgo2jpd",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "14JogKQFdICwWmzpgo2jpd"
  },
  {
    type: "spotify" as const,
    artist: "Addison Jordan",
    title: "Keep That Same Old Feeling",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/6ZrT4g0XttXoyOA8XzHOGU",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02d8351852e90bd7174b66bbd2",
    spotifyId: "6ZrT4g0XttXoyOA8XzHOGU"
  },
  {
    type: "spotify" as const,
    artist: "Bobby Sparks II",
    title: "Musical Diarrhea",
    role: "Tracking Engineer",
    url: "https://open.spotify.com/track/1FTn7MpMDidWYLyKdj5680",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e023121eeed397d8c7d7cf334b5",
    spotifyId: "1FTn7MpMDidWYLyKdj5680"
  },
  {
    type: "spotify" as const,
    artist: "Porte Diferente",
    title: "El Pochito",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/52UekrYckRIekXj7rlO2hl",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "52UekrYckRIekXj7rlO2hl"
  },
  {
    type: "spotify" as const,
    artist: "Frank Hamlin, The Brothers McDavid",
    title: "My Favorite Love Song",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/400fAkHKjAnrUulH8rx8zm",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "400fAkHKjAnrUulH8rx8zm"
  },
  {
    type: "spotify" as const,
    artist: "Porte Diferente",
    title: "Quedate Aqui",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/3fcpIfwb6VBjj9bZKXnoxK",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "3fcpIfwb6VBjj9bZKXnoxK"
  },
  {
    type: "spotify" as const,
    artist: "Sarah Hanks",
    title: "Eternity in my mind",
    role: "Production, Recording, Mixing",
    url: "https://open.spotify.com/track/2f0fDWcm7Wevh0ukzFI67V",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "2f0fDWcm7Wevh0ukzFI67V"
  },
  {
    type: "spotify" as const,
    artist: "Altercations",
    title: "Wait",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/6rdMb9dW9zonR3GfvbeZ7x",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "6rdMb9dW9zonR3GfvbeZ7x"
  },
  {
    type: "spotify" as const,
    artist: "Addison Jodan",
    title: "Queen Val",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/3A1IUAtKIsteyHTSPIcrbi",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "3A1IUAtKIsteyHTSPIcrbi"
  },
  {
    type: "spotify" as const,
    artist: "Oasis Worship",
    title: "My Revival",
    role: "Recording, Mixing",
    url: "https://open.spotify.com/track/243BMQW71Vt0MgCGRtQx8K",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "243BMQW71Vt0MgCGRtQx8K"
  },
  {
    type: "spotify" as const,
    artist: "Akshara",
    title: "Ethereal",
    role: "Production",
    url: "https://open.spotify.com/track/2m5QniDzGkjcHcTCHj4Qc5",
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02a1fcfbc1170622fcb6c2e554",
    spotifyId: "2m5QniDzGkjcHcTCHj4Qc5"
  },
];

export const featuredWorks: FeaturedWorkItem[] = [
  ...orderedSpotifyWorks,
  {
    type: "youtube",
    artist: "Prisha Mehta",
    title: "Leaving You (for now)",
    role: "Produced, Engineered and Mixed",
    url: "https://www.youtube.com/watch?v=2Xt5FtDGzDA",
    embedId: "2Xt5FtDGzDA"
  },
  {
    type: "youtube",
    artist: "Nibal Malshi",
    title: "Isma' Albi (Majida El Roumi)",
    role: "Produced, Engineered and Mixed",
    url: "https://www.youtube.com/watch?v=nC4onmTncpE",
    embedId: "nC4onmTncpE"
  },
  {
    type: "youtube",
    artist: "Sarah Hanks",
    title: "Eternity in my Mind",
    role: "Produced, Engineered and Mixed",
    url: "https://www.youtube.com/watch?v=OXM8e_1zEBA",
    embedId: "OXM8e_1zEBA"
  },
  {
    type: "youtube",
    artist: "Sabina Chamoy",
    title: "Full Moon",
    role: "Produced, Engineered and Mixed",
    url: "https://www.youtube.com/watch?v=mCegHzEz_xI",
    embedId: "mCegHzEz_xI"
  }
];
