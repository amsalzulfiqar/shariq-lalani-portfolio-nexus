
import { FeaturedWorkItem } from '@/types/featuredWork';
import { spotifyWorks } from './spotify-works';
import { youtubeWorks } from './youtube-works';

export const featuredWorks: FeaturedWorkItem[] = [
  ...spotifyWorks,
  ...youtubeWorks
];
