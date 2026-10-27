export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'DISCOGRAPHY', href: '/discography' },
  { label: 'ABOUT', href: '/about' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'VIDEOS', href: '/gallery#videos' },
  { label: 'MERCH', href: '/merch' },
  { label: 'BOOKINGS', href: '/bookings' },
]

export const SOCIALS = [
  { label: 'INSTAGRAM', href: 'https://instagram.com' },
  { label: 'X / TWITTER', href: 'https://x.com' },
  { label: 'TIKTOK', href: 'https://tiktok.com' },
  { label: 'YOUTUBE', href: 'https://www.youtube.com/@bhadboiomlvevo2781' },
]

export const STREAMING = [
  { label: 'SPOTIFY', href: 'https://open.spotify.com/artist/7gCoPolzUpHjzOhp22ihoN' },
  { label: 'APPLE MUSIC', href: 'https://music.apple.com/ca/artist/bhadboi-oml/1548010465' },
  { label: 'AUDIOMACK', href: 'https://audiomack.com/bhadboi_oml' },
  { label: 'YOUTUBE', href: 'https://www.youtube.com/@bhadboiomlvevo2781' },
]

export type Release = {
  id: string
  title: string
  type: 'ALBUM' | 'EP' | 'SINGLE'
  year: string
  number: string
  tracks: number
  runtime: string
  description: string
  tracklist: string[]
}

export const APPLE_MUSIC_PLAYLIST =
  'https://music.apple.com/ca/playlist/bhadboi-oml-essentials/pl.08b40bf644984a41be75aefaf457cc49'

export const RELEASES: Release[] = [
  {
    id: 'no-wam',
    title: 'No Wam',
    type: 'SINGLE',
    year: '2026',
    number: '007',
    tracks: 1,
    runtime: '2:30',
    description:
      'A hard-hitting 2026 single — Skiibii and BhadBoi OML link up for a street anthem that wastes no time getting to the hook.',
    tracklist: ['No Wam (with Skiibii)'],
  },
  {
    id: 'bhadriyun-deluxe',
    title: 'Bhadriyun (Deluxe)',
    type: 'EP',
    year: '2025',
    number: '006',
    tracks: 7,
    runtime: '21:35',
    description:
      'The expanded edition of Bhadriyun — the project that pushed BhadBoi OML into the global Afropop conversation. Home to the breakout record "Shkran Lak" alongside fan favorites like "7AM in Lekki" and "Tomford."',
    tracklist: [
      '7AM in Lekki',
      'Enough',
      'Tomford',
      'Shkran Lak',
      'Double Six',
      'Lagos',
      'Big Boy Shii (Bonus Track)',
    ],
  },
  {
    id: 'bhadriyun',
    title: 'Bhadriyun',
    type: 'EP',
    year: '2025',
    number: '005',
    tracks: 5,
    runtime: '16:20',
    description:
      'A tight, hook-driven EP fusing classic Afrobeat foundations with modern street rhythms. Home to breakout records and some of his most-streamed work.',
    tracklist: ['Tomford (Remix) — feat. Blaqbonez & Jeriq', 'Owereke', 'Drugs and Melody', 'Kind Thing', 'Jumbo'],
  },
  {
    id: 'kaizen',
    title: 'Kaizen',
    type: 'EP',
    year: '2024',
    number: '004',
    tracks: 6,
    runtime: '17:27',
    description:
      'Named for the philosophy of continuous improvement, Kaizen is a focused body of work charting growth, ambition and self-belief — from the cinematic "Kaizen\'s Intro" through standout cuts like "Bag of Vibes" and "Sergio Ramos."',
    tracklist: ["Kaizen's Intro", "Child's Play", 'Bag of Vibes', 'Jah', 'Oversability', 'Sergio Ramos'],
  },
  {
    id: 'bhad-boi-deluxe',
    title: 'Bhad Boi (Deluxe)',
    type: 'ALBUM',
    year: '2023',
    number: '003',
    tracks: 16,
    runtime: '43:18',
    description:
      'The deluxe edition of the project that introduced the BhadBoi OML sound — a full-length statement blending highlife, street-pop and confessional songwriting. Home to breakout records "Wasiu Ayinde," "Testimony," and "Chocolate & Caramel."',
    tracklist: [
      'Alade Ade',
      'River (feat. L.A.X)',
      '247 (with Gimba)',
      'Wasiu Ayinde',
      'Pawo (feat. Kashcoming)',
      'Burn Fire',
      'Maradona',
      'Akwaaba',
      'Alimanjiri (Remix) (feat. Qdot)',
      'Alade Ade (Live)',
      'Chocolate & Caramel',
      'Alimanjiri',
      'Opueh',
      'Toxic Love',
      'Testimony',
      'Iron God',
    ],
  },
  {
    id: 'bhad-boi',
    title: 'Bhad Boi',
    type: 'EP',
    year: '2023',
    number: '002',
    tracks: 6,
    runtime: '20:18',
    description:
      'The original Bhad Boi EP — the foundation of the catalog and the project that put BhadBoi OML on the map.',
    tracklist: ['Bhad Boi', 'Testimony', 'Eniba', 'Koba', 'Owereke', 'Blessed'],
  },
  {
    id: 'realize',
    title: 'Realize',
    type: 'SINGLE',
    year: '2025',
    number: '001',
    tracks: 1,
    runtime: '2:10',
    description:
      'A standout single with Rybeena and one of his most-streamed records to date.',
    tracklist: ['Realize (with Rybeena)'],
  },
]

export type TourDate = {
  date: string
  day: string
  month: string
  city: string
  venue: string
  country: string
  status: 'TICKETS' | 'SOLD OUT' | 'RSVP'
}

export const TOUR_DATES: TourDate[] = []

export type MerchItem = {
  id: string
  name: string
  price: string
  category: string
  image: string
}
