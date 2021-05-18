const PlayList=()=>(
    <div className="modal fade p-5" id="myAddToPlayList">
  <div className="modal-dialog modal-dialog-centered modal-lg p-5">
    <div className="modal-content"> 
      
      
      <div className="modal-header modal-sec-heading border-0">
        <h4 className="modal-title pt-3 m-auto">Add to playlist</h4>
        <a href="">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        </a> </div>
     
      <div className="modal-body model-content-one pb-5">
        <div>
          <h5>Playlist Tittle</h5>
          <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Playlist Name" title="Type in a name" className="form-control"/>
          <div className="text-center m-2 pt-3"> <a href="#">
            <div className="btn btn-round prm-btn font-12 pl-5 pr-5">SAVE</div>
            </a> </div>
        </div>
        <div className="playicon">
          <h5> Select Playlist</h5>
          <hr/>
          <div className="d-flex">
            <div className="form-check-inline">
              <input type="radio" className="form-check-input1" id="radio11" name="optradio" value="option1" checked/>
              <label className="form-check-label" htmlFor="radio1">  
              </label>
            </div>
            <div className="box"> <i className="fa fa-music fa-2x" aria-hidden="true"></i> </div>
            <div className="pl-3">
              <h6>Storiya Playlist 01</h6>
              <p> <small><span className="text-primary"> 5 Stories</span><br/>
                Last Updated on 2 hours ago</small> </p>
            </div>
            <div className="ml-auto pt-4"> <a><a>
              <div className="btn btn-round prm-btn font-12 pl-5 pr-5">ADD</div>
              </a></a> </div>
          </div>
          <hr/>
          <div className="d-flex">
            <div className="form-check-inline">
              <input type="radio" className="form-check-input1" id="radio12" name="optradio" value="option1" checked/>
              <label className="form-check-label" htmlFor="radio1">  
              </label>
            </div>
            <div className="box"> <i className="fa fa-music fa-2x" aria-hidden="true"></i> </div>
            <div className="pl-3">
              <h6>Storiya Playlist 01</h6>
              <p> <small><span className="text-primary"> 5 Stories</span><br/>
                Last Updated on 2 hours ago</small> </p>
            </div>
            <div className="ml-auto pt-4"> <a href=""> 
              <div className="btn btn-outline-primary btn-round font-12 pl-5 pr-5">ADD</div>
              </a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);

export default PlayList;