import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ResponsiveContainer } from 'recharts';
import zIndex from '@mui/material/styles/zIndex';
import black from "../assets/images/black.png"
import yellow from "../assets/images/yellow.png"
import gray from "../assets/images/gray.png"
import red from "../assets/images/red.png"
import green from "../assets/images/green.png"
 function AccessibleTableTwo() {
  return (
    <ResponsiveContainer>
      <TableContainer
        style={{
         paddingTop:"80px",
         paddingLeft:"20px",
         marginTop:"-50px",
          background: "#E9EEE9",
          border:"none",
          zIndex:"-2",
           borderRadius: "20.366px"
        }}
        component={Paper}
      >
        <Table
          width="968px"
          height= "387.502px"
          border="none"
         
           border-radius= "20.366px"
          style={{
            background: "#E9EEE9",
            border:"none",
            borderRadius: "20.366px",
            
          }}
        >
          <TableHead>
            
            <TableRow sx={{
                '& th': { border: "none" },
                '& td': { border: "none" }
              }}>
           
             
              <TableCell align="left" style={{color: "#606060",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal"}}> Product Name</TableCell>
              <div style={{display:"flex",gap:"100px", border:"none",background:"transparent",transform:"translateX(120px)"}}>
              <TableCell style={{color: "#606060",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal"}}>Price</TableCell>
              <TableCell style={{color: "#606060",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal"}}>Sold</TableCell>
              <TableCell style={{color: "#606060",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal"}}>Status</TableCell>
              </div>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{
                '& th': { border: "none" },
                '& td': { border: "none" }
              }}>
             
              <TableCell component="th" scope="row" style={{alignItems:"center" ,height:"10px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}><img  style={{alignItems:"center" , transform:"translateY(15px)",paddingRight:"15px"}}src={black}/>Marvel Thor Movie Print Marble T...</TableCell>
              <TableCell component="th" scope="row" align="left" style={{color: "#F47D4A",
transform:"translate(120px,20px)",
fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight:" 700",
lineHeight: "normal"}}>$23</TableCell>
              
              <TableCell align="left" component="th" scope="row" style={{transform:"translate(-162px,20px)"}}>
              <text style={{transform:"translateX(800px)",width:"2px",margin:"0px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}>53 pcs</text> 
              </TableCell>
             <TableCell align="right" component="th" scope="row" style={{transform:"translate(-97px,20px)"}}>
              <text style={{transform:"translateX(800px)",width:"2px",margin:"0px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}><img style={{transform:"translateX(-10px)"}} src={green}/>In Stock</text> 
              </TableCell>
            </TableRow>
            <TableRow sx={{
                '& th': { border: "none" },
                '& td': { border: "none" }
              }}>
              
              <TableCell component="th" scope="row" style={{alignItems:"center" ,height:"65px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}><img  style={{alignItems:"center" , transform:"translateY(15px)",paddingRight:"15px"}}src={yellow}/>Aero Shorts Pants Multipacks S...</TableCell>
              <TableCell component="th" scope="row" align="left" style={{color: "#F47D4A",
transform:"translate(120px,20px)",
fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight:" 700",
lineHeight: "normal"}}>$23</TableCell>
<TableCell align="left" component="th" scope="row" style={{transform:"translate(-162px,20px)"}}>
              <text style={{transform:"translateX(800px)",width:"2px",margin:"0px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}>53 pcs</text> 
              </TableCell>
              <TableCell align="right" component="th" scope="row" style={{transform:"translate(-72px,20px)"}}>
              <text style={{transform:"translateX(800px)",width:"2px",margin:"0px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}><img style={{transform:"translateX(-10px)"}} src={red}/>Out of Stock</text> 
              </TableCell>
            </TableRow>
            <TableRow sx={{
                '& th': { border: "none" },
                '& td': { border: "none" }
              }}>
            
              <TableCell component="th" scope="row" style={{alignItems:"center" ,height:"65px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}><img  style={{alignItems:"center" , transform:"translateY(15px)",paddingRight:"15px"}}src={gray}/>Erigo T-Shirts Green</TableCell>
              
              <TableCell component="th" scope="row" align="left" style={{color: "#F47D4A",
transform:"translate(120px,20px)",
fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight:" 700",
lineHeight: "normal"}}>$23</TableCell>
            <TableCell align="left" component="th" scope="row" style={{transform:"translate(-162px,20px)"}}>
              <text style={{transform:"translateX(800px)",width:"2px",margin:"0px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}>53 pcs</text> 
              </TableCell>
            <TableCell align="right" component="th" scope="row" style={{transform:"translate(-97px,20px)"}}>
              <text style={{transform:"translateX(800px)",width:"2px",margin:"0px",color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "normal"}}><img style={{transform:"translateX(-10px)"}} src={green}/>In Stock</text> 
              </TableCell>
            </TableRow>
            <TableRow sx={{
                '& th': { border: "none" },
                '& td': { border: "none" }
              }}>
             
                
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ResponsiveContainer>
  );
}
export default AccessibleTableTwo;