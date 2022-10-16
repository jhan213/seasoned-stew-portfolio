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
      'An application to search through millions of books and save favorites.',
    img: BookSearchImg,
    link: 'https://paperback-search-engine-9.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Youtube Transcript App',
    desc: 'An application that converts Youtube videos to captions.',
    img: YoutubeImg,
    link: 'https://github.com/jaehan213/time-youtube-caption-script',
  },
  {
    id: uuidv4(),
    name: 'NoteTaker',
    desc: 'An application that allows to create and save notes.',
    img: NoteTakerImg,
    link: 'https://rocky-balboa-note-app.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Music Trivia',
    desc:
      'An application that allows users to test their knowledge on music from current and past decades.',
    img: MusicTriviaImg,
    link: 'https://jaehan213.github.io/silver-music-trivia/',
  },
  {
    id: uuidv4(),
    name: 'Database Manager',
    desc:
      'An application that allows a remote SQL database to be managed through the terminal.',
    img: SQLDBImg,
    link: 'https://github.com/jaehan213/sql-database-editor-in-terminal',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      "An application that displays the forecast for today's date and the upcoming week for a particular city.",
    img: WeatherImg,
    link: 'https://jaehan213.github.io/widget-web-weather-dashboard/',
  },
  {
    id: uuidv4(),
    name: 'Work Day Scheduler',
    desc:
      'An application that allows users to log their tasks, duties, and meetings for the day.',
    img: WorkDayImg,
    link: 'https://jaehan213.github.io/goat-work-day-scheduler/',
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc: 'An application that allows users to generate random passwords.',
    img: PasswordGenImg,
    link: 'https://jaehan213.github.io/gold-web-password-generator/',
  },
];

export default projects;
