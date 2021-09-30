import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    )
}

export default App;