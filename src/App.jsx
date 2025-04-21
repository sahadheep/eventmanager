import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UpcomingEvents from './pages/UpcomingEvents';
import EventDetails from './pages/EventDetails';
import MyEvents from './pages/MyEvents';
import NotFound from './pages/NotFound';
import { RSVPProvider } from './contexts/RSVPContext';

function App() {
  return (
    <Router>
      <RSVPProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<UpcomingEvents />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/my-events" element={<MyEvents />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </RSVPProvider>
    </Router>
  );
}

export default App;