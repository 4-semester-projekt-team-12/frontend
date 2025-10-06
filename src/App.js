import Header from './components/Header';
import Footer from './components/Footer'
import AnnouncementComponent from './components/AnnouncementComponent'
import FileComponent from './components/FileComponent'
import RoomComponent from './components/RoomComponent'
import CalendarComponent from './components/CalendarComponent'

function App() {
  return (
    <div>
      <Header />
      <RoomComponent />
    <div className="grid-container">
      <AnnouncementComponent />
      <CalendarComponent />
      <FileComponent />
    </div>

      <Footer />
    </div>
  );
}

export default App;