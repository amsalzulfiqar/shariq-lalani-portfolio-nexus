
export interface FeaturedWorkItem {
  type: 'spotify' | 'youtube';
  artist: string;
  title: string;
  role: string;
  url: string;
  embedId?: string;
  imageUrl?: string;
  spotifyId?: string;
}
