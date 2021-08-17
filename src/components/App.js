import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";

function App() {
  return (
    <div className="App">      
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/services" component={()=><Services/>}/>
            <Route exact path="/costumsoftware" component={()=><CustomSoftware/>}/>
            <Route exact path="/mobileapps" component={()=><MobileApps/>}/>
            <Route exact path="/websites" component={()=><div>websites</div>}/>
            <Route exact path="/revolution" component={()=><div>revolution</div>}/>
            <Route exact path="/about" component={()=><div>about</div>}/>
            <Route exact path="/contact" component={()=><div>contact</div>}/>
            <Route exact path="/estimate" component={()=><div>estimate</div>}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
