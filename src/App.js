import { useAuth } from './hooks/useAuth';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import AnnouncementComponent from './components/AnnouncementComponent';
import FileComponent from './components/FileComponent';
import RoomComponent from './components/RoomComponent';
import CalendarComponent from './components/CalendarComponent';
import './App.css';

function App() {

  const {user = null, isLoading = false } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      { user ? (
        <>
      <Header />
      <div className="grid-container">
        <RoomComponent />
        <AnnouncementComponent />
        <CalendarComponent />
        <FileComponent />
      </div>
      <Footer />
      </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
