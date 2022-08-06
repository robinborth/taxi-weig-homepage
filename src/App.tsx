import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { Container } from './styles/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home'
import DataPrivacy from './Dataprivacy';
import Imprint from './Imprint';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageView from './ImageView';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Container>
            <Navbar />
          </Container>
          <ScrollToTop>
              <Container>
              <Switch>
                <Route path="/impressum">
                  <Imprint />
                </Route>
                <Route path="/datenschutz">
                  <DataPrivacy />
                </Route>
                  <Route path="/imagegallery">
                      <ImageView />
                  </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Container>
          </ScrollToTop>
          <Footer />
        </Router>
      </ThemeProvider>    
);

export default App;

