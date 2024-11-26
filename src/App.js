
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './components/HomePage';
import { SkillsPage} from './components/SkillsPage'
import { Projects} from './components/Projects'
import { ContactsPage } from './components/ContactsPage';



import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
<>
      <NavigationBar/>
        <HomePage/>
       <SkillsPage/>
      <Projects/>
 <ContactsPage/> 
  
</>

  );
}

export default App;
