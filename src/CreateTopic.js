import choose from "./images/choose.png";
import { Multiselect } from 'multiselect-react-dropdown';
import {useState,useEffect,useRef} from 'react';
//name , desc not going to node
const Testcategory=()=>{
  const options=[
    {value:1,label:'Arts'},
    {value:2,label:' Automotive & Vehicle'},
    {value:3,label:'Business & Industrial'},
    {value:4,label:'Careers'},
    {value:5,label:'Comedy'},
    {value:6,label:'Education'},
    {value:7,label:'Entertainment'},
    {value:8,label:' Family & Parenting'},
    {value:9,label:'Fiction'}
  ];
  const selected=[{value:1,label:'Arts'},
    {value:4,label:'Careers'}
  ];
  const [category, setCategory] = useState(selected.map((opt)=>opt.value));
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  
  const titleRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    
    
  }, [desc]);

  const selectCategory=(set,item)=>{//change e to 
   
    console.log("value:",item.value,"label:",item.label,"array:",set);
    const alreadypresent=category.findIndex((i)=>i===item.value);
    let arr=category;
    if(alreadypresent!==-1){
      arr.splice(alreadypresent,1);
    } else {
      arr=[...category,item.value];
    }
    setCategory(arr);
  }

const topicCreate=async (e)=>{
  e.preventDefault();
 // const titleElement = titleRef.current.value;
 // const descElement = descRef.current.value;
 
//   console.log(titleElement,"?",descElement)
   if(!name.trim()){
     console.log("Write topic name")
     return;
 }
// else {
//   setName(titleElement);
//   setDesc(descElement);
//   }
console.log(category,name,desc);
try {
  const cat=category[0];
  //name,description,is_lock,is_draft,is_flag,category
  const body = { name:name, category:cat, description:desc,is_flag:false, is_lock:true,is_draft:false };
  const response = await fetch("http://localhost:4000/newtopic", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  window.location = "/";
} catch (err) {
  console.error(err.message);
}
}


return(
    <div className="modal fade" id="createTopic" tabIndex="1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title" id="exampleModalLabel"></h5>
        <button type="button" className=" btn close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div className="modal-body pt-0 p-5">
        <h5 className="text-center title">Create Topic</h5>
        <form >
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1"></label>
            <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Topic (Max 50 Characters) " ref={titleRef}/>
          </div>
          <label htmlFor="selectOption">Select Categories for the topic</label>
          <div className=" pb-2 pt-2">
           {/**paste below comment here */}
           <Multiselect options={options}  
                        selectedValues={selected}
                        placeholder=''
                        showCheckbox={true}
                        onSelect={selectCategory} 
                        onRemove={selectCategory}
                        displayValue="label"            
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea onChange={(e)=>{setName(e.target.value)}} ref={descRef} className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your text topic (Max 60 Characters)"></textarea>
          </div>
         
          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="exampleFormControlTextarea1">Add topic image</label>
              <div className="card-box-dotted p-5 text-center"> <a href=""><img src={choose} alt="choose" className="img-fluid mb-4"/></a>
                <div> <a className='btn btn-outline-primary btn-round font-12' /*href='javascript:;'*/> Choose File...
                  <input type="file" style={{position:"absolute",zIndex:2,top:0,left:0,filter: "alpha(opacity=0)",msFilter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",opacity:0,backgroundColor:'transparent',color:'transparent'}} name="file_source" size="40" /*onChange='$("#upload-file-info").html($(this).val());'*//>
                  </a> &nbsp; <span className='label label-info' id="upload-file-info"></span> </div>
              </div>
              <div className="form-check-inline mt-3">
                <div className="custom-control custom-checkbox pmd-checkbox">
                  <input className="custom-control-input" type="checkbox" value="" id="customCheckbox1" checked />
                  <label className="custom-control-label pmd-checkbox-ripple-effect" htmlFor="customCheckbox1"> Lock Topic <br/>
                    <small className="font-blue"> Other users cannot post on your topic.</small> </label>
                </div>
                
               
              </div>
            </div>
            <div className="col-6">
              
              <label htmlFor="exampleFormControlTextarea1">Labels <span className="font-blue">(Ex: #kochimetro #kochi)</span> </label>
              <div className="card-box p-5 text-center bg-skyblue" style={{minHeight: "212px"}}> </div>
              <div className="mt-4 float-right">
                <a href=""><button type="button" onClick={topicCreate} className="btn prm-btn btn-round font-12 mr-1">CREATE</button></a>
                <a href=""><button type="button" className="btn btn-outline-primary btn-round font-12"><b>SAVE DRAFT</b></button></a>
              </div>
            </div>
          </div>
         
          
        </form>
      </div>
    </div>
  </div>
</div>
);
}
export default Testcategory;



{/** <select name="states" id="example" className="form-control multiselect"  multiple="multiple" onChange={selectCategory}>
              <option key={1} selected value="Arts" className="pb-2">Arts</option>
              <option key={2} value="AutomotiveVehicle" className="pb-2">Automotive & Vehicle </option>
              <option key={3} value="BusinessIndustrial" className="pb-2">Business & Industrial</option>
              <option key={4} value="Carrers">Career</option>
              <option key={5} value="Comedy">Comedy</option>
              <option key={6} selected value="Education">Education</option>
              <option key={7} value="Entertainment">Entertainment</option>
              <option key={8} value="Family & Parenting">Family & Parenting</option>
              <option key={9} value="Fiction">Fiction</option>
              <option key={10} value="Finance">Finance</option>
              <option key={11} value="Goverment">Government</option>
              <option key={12} value="Health">Health & Fitness</option>
              <option key={13} value="History">History</option>
              <option key={14} value="Hobbies">Hobbies & Interest</option>
              <option key={15} value="HomeGarden">Home & Garden</option>
              <option key={16} value="News">News</option>
              <option key={17} value="Politics">Politics</option>
              <option key={18} value="Pets">Pets</option>
              <option key={19} selected value="Music">Music</option>
              <option key={20} value="Religion">Religion & Spirituality</option>
              <option key={21} value="Science">Science</option>
              <option key={22} value="Society">Society & Culture</option>
              <option key={23} value="Sports">Sports</option>
              <option key={24} value="Style">Style & Fashion</option>
              <option key={25} value="Technology">Technology</option>
              <option key={26} value="Travel">Travel</option>
             {/* <option>
              <button type="button" className="btn prm-btn btn-round"> Save </button>
             </option>// this also comment anyway**
            </select> */}