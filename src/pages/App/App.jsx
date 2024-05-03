import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Tournaments from '../Tournaments/Tournaments';
import LadderMatches from '../LadderMatches/LadderMatches';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/tournaments/matches" element={<LadderMatches />} />
            <Route path="/tournaments" element={<Tournaments />} />
            {/* redirect to /tournaments if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/tournaments" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
