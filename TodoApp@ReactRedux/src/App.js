import './styles/App.css';
import './styles/bootstrap.min.css'

import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
function App() {
  return (
    <div className="App">
      <PageTitle>
        TODO List
      </PageTitle>
      <AppHeader/>
    </div>
  );
}

export default App;
