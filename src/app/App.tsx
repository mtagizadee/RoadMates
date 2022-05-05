import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { aboutPageUrl, authURls, homePageUrl } from '../constants';
import AboutPage from '../pages/About/About';
import LoginPage from '../pages/Auth/Login/Login';
import ErrorPage from '../pages/Error/Error';
import HomePage from '../pages/Home/HomePage';
import styles from './App.module.scss';

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path = {`${aboutPageUrl}`} element={<AboutPage/>}/>
                <Route path = {`${homePageUrl}`} element={<HomePage/>}/>
                <Route path = {`${authURls.login}`} element={<LoginPage/>}/>
                <Route path = {`*`} element={<ErrorPage> <p> <span className={ styles.span }> 404 </span> NOT FOUND </p> </ErrorPage>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;