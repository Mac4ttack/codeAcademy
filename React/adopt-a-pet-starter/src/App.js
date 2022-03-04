import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route>
          <HomePage path='HomePage/:type?' />
        </Route>
      </div>
    </Router>
  );
}

export default App;
