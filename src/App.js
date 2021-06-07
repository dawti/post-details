/**Post-details, header and footer */
import Footer from './Footer';
import Header from './Header';
import Post from './Post';
import TopRated from './TopRated';
import Invite from './Invite';
import Widget from './Widget';
/**Routing and css */
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
/**Station pin and post */
import Leftsidebar from './Leftsidebar';
import Pinbody from './Pinbody';
import Postcard from './Postcard';
/**Topic-details*/
import Bodyhead from './Bodyhead.js';
import Body from './Body.js';
import Body1 from './Body1.js';
import Body2 from './Body2.js';

function App() {
  return (
    <div className="wrapper">
    <div id="content" className="App">
      <Header />


      <Router>
        <Switch>
          <Route path="/post-details">
            <section className="main">
             <div className="container-fluid visiblity">
               <div className="row clearfix">
                  <Post/>
                  <div className="col-md-3"> 
                  <div className="row clearfix">    
                    <TopRated/>
                    <Invite/>
                    <Widget/>
                  </div>
                </div>
             </div>
           </div>
           </section>
         </Route>
         <Route path="/station-pins">
         <section className="main">
                    <div className="container-fluid visiblity">
                        <div className="row clearfix">
                            <Leftsidebar/>
                            <Pinbody/>
                        </div>
                    </div>
                    </section>   
         </Route>
         <Route path="/station-posts">
         <section className="main">
                    <div className="container-fluid visiblity">
                        <div className="row clearfix">
                            <Leftsidebar/>
                            <Postcard/>
                        </div>
                    </div>
                    </section>   
         </Route>
         
         <Route path="/topic-details">
         <section className="main">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            {/* <!-- section --> */}
                            <div className="col-md-9 pt-5">
                            
                                <Bodyhead />
                                <Body />
                                <Body2/>
                                <Body1 />
                               
                               
                            </div>
                            {/* <!-- // --> */}
                            {/* <!-- Right Sidebar --> */}
                            <div className="col-md-3"> 
                              <div className="row clearfix">    
                                 <TopRated/>
                                 <Invite/>
                                 <Widget/>
                              </div>
                            </div>

                            {/* <!-- // --> */}
                        </div>
                    </div>
                </section>
         </Route>
         <Route path="/">
           <Redirect to="/station-posts"/>
         </Route>
       </Switch>
    </Router>


      <Footer />
    </div>
    </div>
  );
}

export default App;
