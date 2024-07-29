

const Job=({data})=>{

  return <div>{data.map((item)=>{
      return  <>
        <div>{item.postedAt}</div>
        <div>{item.contract}</div>
        <div>{item.position}</div>
        <div>{item.company}</div>
        <div>{item.location}</div>
       <div>............................</div>    
          
        </>

    
    })}</div>
}

export default Job;