import React from 'react'

const SideButtons = () => {
  return (
    
       <ul style={{
            display:"flex",
            
            flexDirection:"column",

              gap:"25px"
           }}>
            <li   style={{
              listStyle:'none'
            }}>
               
                    <div style={{
               
                width:"194px",
                height:"57px",
                flexShrink:"0",
                gap:"10px 20px",
                borderRadius:"41px",
                border:"3px solid #515062",
                background:"#F2F7F2",
                display:"flex",
                justifyContent:"center",
                placeItems:"center"
                
                ,
              
            }}> 
          
                    <div  style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                          
                        <img   src="/Dash.svg" alt="" />

            <a    style={{
                
                color: "#515062",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "100px",
                fontFamily:"Apfel Grotezk",
                textDecoration: "none",
    

            }} href="/">Dasboard</a>
        
            </div>
           
             </div>
             
            </li>
            






             <li style={{
              listStyle:'none'
            }}><div style={{
                width:"165px",
                height:"57px",
                flexShrink:"0",
                gap:"10px 20px",
                borderRadius:"41px",
                border:"3px solid #515062",
                background:"#F2F7F2",
                display:"flex",
                justifyContent:"center",
                placeItems:"center"
            }}> 
                    <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <img src="/Box.svg" alt="" />

            <a   style={{
                
                color: "#515062",
        fontFamily: "Apfel Grotezk",
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight:"500",
            lineHeight:"100px",
           textDecoration:"none"

            }} href="/products">Products</a>
            </div>
            
             </div>
             </li>




             <li style={{
              listStyle:'none'
            }}><div style={{
                width:"165px",
                height:"57px",
                flexShrink:"0",
                gap:"10px 20px",
                borderRadius:"41px",
                border:"3px solid #515062",
                background:"#F2F7F2",
                display:"flex",
                justifyContent:"center",
                placeItems:"center"
            }}> 
                    <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <img src="/Graph.svg" alt="" />

            <a   style={{
                
                color: "#515062",
        fontFamily: "Apfel Grotezk",
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight:"500",
            lineHeight:"100px",
           textDecoration:"none"

            }} href="/analytics">Analytics</a>
            </div>
            
             </div>
             </li>





             <li style={{
              listStyle:'none'
            }}><div style={{
                width:"194px",
                height:"57px",
                flexShrink:"0",
                gap:"10px 20px",
                borderRadius:"41px",
                border:"3px solid #515062",
                background:"#F2F7F2",
                display:"flex",
                justifyContent:"center",
                placeItems:"center"
            }}> 
                    <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <img src="/people.svg" alt="" />

            <a   style={{
                
                color: "#515062",
        fontFamily: "Apfel Grotezk",
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight:"500",
            lineHeight:"100px",
           textDecoration:"none"

            }} href="/customers">Customers</a>
            </div>
            
             </div>
             </li>





             <li style={{
              listStyle:'none'
            }}><div style={{
                width:"148px",
                height:"57px",
                flexShrink:"0",
                gap:"10px 20px",
                borderRadius:"41px",
                border:"3px solid #515062",
                background:"#F2F7F2",
                display:"flex",
                justifyContent:"center",
                placeItems:"center"
            }}> 
                    <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <img src="/Profile.svg" alt="" />

            <a   style={{
                
                color: "#515062",
        fontFamily: "Apfel Grotezk",
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight:"500",
            lineHeight:"100px",
           textDecoration:"none"

            }} href="/profile">Profile</a>
            </div>
            
             </div>
             </li>




             <li style={{
              listStyle:'none'
            }}><div style={{
                width:"194px",
                height:"57px",
                flexShrink:"0",
                gap:"10px 20px",
                borderRadius:"41px",
                border:"3px solid #515062",
                background:"#F2F7F2",
                display:"flex",
                justifyContent:"center",
                placeItems:"center"
            }}> 
                    <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <img src="/Settings.svg" alt="" />

            <a   style={{
                
                color: "#515062",
        fontFamily: "Apfel Grotezk",
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight:"500",
            lineHeight:"100px",
           textDecoration:"none"

            }} href="/settings">Settings</a>
            </div>
            
             </div>
             </li>


             

   </ul> 
    
  )
}

export default SideButtons
