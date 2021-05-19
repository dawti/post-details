import { Component } from 'react';
import Feedpublished from './Feedfile/Feedpublished';
// import Feedresponse from './Feedrespose';
import Loading from './Loading';

class Postcard extends Component{
    render(){
        return(
            <div className="col-md-10 p-4">
                <div className="section-header">
                    <h2 className="sec-heading post-line float-left">Posts</h2>
                </div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active bg-img-btn" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><b>Published</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-img-btn" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><b>Saved</b></a>
                    </li>
                </ul>

                {/* Feed Published */}
                <Feedpublished/>
                {/* Feed Published End */}

                {/* Loading */}
                <Loading/>
                {/* Loading End */}
            </div>
        );
    }
}
export default Postcard;