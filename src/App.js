import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ThemeProvider } from 'styled-components'
import {darkTheme} from './StyledComponent/theme/darkTheme'
// import NoiDung from './Pages/Footer/NoiDung';
import Brand from './Pages/Footer/Brand';
import ThaoThuanSuDung from './Pages/Footer/ThaoThuanSuDung';
import FAQ from './Pages/Footer/FAQ';
import ChinhSachBaoMat from './Pages/Footer/ChinhSachBaoMat';
import Carousel from './Components/Carousel/Carousel';



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/brand"   component={Brand} />
          <Route path="/noidung/thoathuan" exact   component={ThaoThuanSuDung} />
          <Route path="/noidung/baomat"   exact component={ChinhSachBaoMat} /> 
          <Route path="/noidung/faq"   exact component={FAQ} />
          <Route path="/carousel"    component={Carousel} />
          
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
