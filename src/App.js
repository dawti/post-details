import Footer from './Footer';
import Header from './Header';
import Post from './Post';
import TopRated from './TopRated';
import Invite from './Invite';
import Widget from './Widget';
import './App.css';

function App() {
  return (
    <div className="wrapper">
    <div id="content" className="App">
      <Header />
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
      <Footer />
    </div>
    </div>
  );
}

export default App;
