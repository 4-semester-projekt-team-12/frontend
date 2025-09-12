import Heading from './components/Heading'
import Footing from './components/Footing'
import Calendar from './components/Calendar'
import Announcements from './components/Announcements'
import Files from './components/Files'
import Rooms from './components/Rooms'

function App() {
  return (
    <div>
      <Heading />
    <div className="grid-container">
      <Announcements />
      <Calendar />
      <Files />
      <Rooms />
      </div>

      <Footing />
    </div>
  );
}

export default App;