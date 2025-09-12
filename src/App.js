import Header from './components/Header'
import Footer from './components/Footer'
import Calendar from './components/Calendar'
import Announcements from './components/Announcements'
import Files from './components/Files'
import Rooms from './components/Rooms'

function App() {
  return (
    <div>
      <Header />
    <div className="grid-container">
      <Announcements />
      <Calendar />
      <Files />
      <Rooms />
      </div>

      <Footer />
    </div>
  );
}

export default App;