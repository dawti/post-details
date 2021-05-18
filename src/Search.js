import searchbtn from './images/search-btn.png';

const Search=()=>(
    <form className="form-inline my-2 my-lg-0 ml-auto search-form">
              <input className="form-control mr-sm-2 ml-auto" type="search" placeholder="Search" aria-label="Search..."/>
              <button className="search-btn my-2 my-sm-0" type="submit"> <img src={searchbtn} alt=""/> </button>
            </form>
);

export default Search;