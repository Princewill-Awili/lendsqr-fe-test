export const statusRandomizer = () =>{
     const states = ['Active', 'Inactive', 'Blacklisted', 'Pending'];
     return states[Math.floor(Math.random()*states.length)];
}




export const statusRender = (status) => {
     if(status === 'Active'){
          return {
               background:"#F3FCF6",
               color:"#39c062",
               borderRadius:"100px",
               padding:"5px 15px",
               cursor:"pointer",
               fontFamily:"Work Sans",
               fontSize:"14px",
               fontWeight:"400"
          }
     }
     if(status === 'Inactive'){
          return {
               background:"#F5F5F7",
               color:"#868EA3",
               borderRadius:"100px",
               padding:"5px 15px",
               cursor:"pointer",
               fontFamily:"Work Sans",
               fontSize:"14px",
               fontWeight:"400"
          }
     }
     if(status === 'Blacklisted'){
          return {
               background:"#FCE6EB",
               color:"#ED587D",
               borderRadius:"100px",
               padding:"5px 15px",
               cursor:"pointer",
               fontFamily:"Work Sans",
               fontSize:"14px",
               fontWeight:"400"
          }
     }
     if(status === 'Pending'){
          return {
               background:"#FDF7E5",
               color:"#F0C847",
               borderRadius:"100px",
               padding:"5px 15px",
               cursor:"pointer",
               fontFamily:"Work Sans",
               fontSize:"14px",
               fontWeight:"400"
          }
     }
}

export const randomBank = () => {
     const banks = ['First Bank','Providus Bank', 'Kuda Bank','Zenith Bank', 'GTB Bank'];
     return banks[Math.floor(Math.random()*banks.length)]
}

export const maritalStatus = () => {
     const status = ['Married', 'Not Married'];
     return status[Math.floor(Math.random()*2)]
 }