import { MdWeekend } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import BookSearchImg from '../images/book_search.png';
import WeatherImg from '../images/weather_dashboard.png';
import WorkDayImg from '../images/work_day.png';
import SQLDBImg from '../images/sql_database_editor.png';
import YoutubeImg from '../images/youtube_caption.png';
import PasswordGenImg from '../images/password_gen.png';
import NoteTakerImg from '../images/notetaker_app_preview.png';
import MusicTriviaImg from '../images/music_trivia.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Book Search Engine',
    desc:
      'A website to search through Google Books API and save any favorites.',
    img: BookSearchImg,
    link: 'https://paperback-search-engine-9.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Youtube Caption App',
    desc: 'A NodeJS app that converts a Youtube video link to its captions.',
    img: YoutubeImg,
    link: 'https://github.com/jaehan213/time-youtube-caption-script',
  },
  {
    id: uuidv4(),
    name: 'NoteTaker',
    desc: 'A website where users can take and save notes.',
    img: NoteTakerImg,
    link: 'https://rocky-balboa-note-app.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Music Trivia',
    desc:
      'A website for users to test their knowledge on music from millions of songs (created with Spotify API).',
    img: MusicTriviaImg,
    link: 'https://jaehan213.github.io/silver-music-trivia/',
  },
  {
    id: uuidv4(),
    name: 'Database Manager',
    desc: 'An NodeJS app that manages a remote SQL database from the terminal.',
    img: SQLDBImg,
    link: 'https://github.com/jaehan213/sql-database-editor-in-terminal',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      "A website that displays today's weather forecast and the upcoming week's for a particular city (One Call API).",
    img: WeatherImg,
    link: 'https://jaehan213.github.io/widget-web-weather-dashboard/',
  },
  {
    id: uuidv4(),
    name: 'Work Day Scheduler',
    desc:
      'A website where users can log their tasks, duties, and meetings for the day.',
    img: WorkDayImg,
    link: 'https://jaehan213.github.io/goat-work-day-scheduler/',
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc:
      'A website where users can generate random passwords to meet different criteria.',
    img: PasswordGenImg,
    link: 'https://jaehan213.github.io/gold-web-password-generator/',
  },
];

export default projects;
