import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import FloatingButtons from './components/FloatingButtons';
import HomePage from './pages/HomePage';
import ConsultationPage from './pages/ConsultationPage';
import TestsPage from './pages/TestsPage';
import PackagesPage from './pages/PackagesPage';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/admin/consultations" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
