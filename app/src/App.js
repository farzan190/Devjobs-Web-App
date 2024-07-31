import './App.css';
import {useState} from 'react'
import data from './data.json';
import Job from './Job';
const App=()=> {

  const[jobsData,setJobsData]=useState(data);
  const[searchValue,setSearchValue]=useState();
  const[LocationValue,setLocationValue]=useState();
   const [tick,setTick]=useState(false);

  
  function handleFunction(event){
           setSearchValue(event.target.value);
             if(!event.target.value){
            setJobsData(data);
          }
  }

  
  function handleSearch(){
    const JD= jobsData.filter((item)=> item.company.trim().toLowerCase()===searchValue.trim().toLowerCase());
   
    setJobsData(JD);
     

   }
 
  
  function handleLocation(event){
    const Talue=event.target.value;
    setSearchValue(Talue);
    const PD= jobsData.filter((item)=> item.location.trim().toLowerCase().includes(Talue.trim().toLowerCase()));
    setJobsData(PD);
}





 function handleCheckBox(){
        const FullTime=  jobsData.filter((item)=>
        item.contract.trim()==="Full Time")
        console.log(FullTime);
        setJobsData(FullTime);  

     }
    
 

  
  return (
 <>
 
  <input type='search' value={searchValue} onChange={(event)=>handleFunction(event)} placeholder='Filter by title,Company,experstise...'/>
  <input type='search' value={LocationValue} onChange={(event)=>handleLocation(event)} placeholder='Filter by Location...'/>

  <button onClick={()=>handleSearch()}>search</button>
  <input type='checkbox'   onClick={()=>handleCheckBox()  }/>
  <Job data={jobsData} setData={setJobsData} />
  <button>loadmore</button>  
 
  </>
  )


}

export default App;


// we are supposed to search from the data , abb usme se kyakya match hona chahiye wo dekhne wali baat hai 
