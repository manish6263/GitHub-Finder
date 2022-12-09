import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './component/layout/Alert';
import Footer from './component/layout/Footer';
import Navbar from './component/layout/Navbar';
import { AlertProvider } from './context/alert/AlertContext';
import { GithubProvider } from './context/github/GithubContext';
import Home from './pages/Home';
import User from './pages/User';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/'
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;