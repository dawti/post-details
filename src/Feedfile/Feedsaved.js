import Feed from './Feed';

const Feedsaved = () => {
    return (
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        {/* <!-- Section Body --> */}
            <div className="section-body mb-3">
                <div className="article">
                {/* <!-- Media --> */}
                
                    <Feed/>
                
                {/* <!--//--> */}           
                </div>
            </div>
        </div>
    )
}

export default Feedsaved;