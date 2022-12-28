export const statusRender = (status) => {
     if(status === 'Active'){
          return {
               background:"#F3FCF6",
               color:"#39c062",
               borderRadius:"100px",
               padding:"5px 15px"
          }
     }
     if(status === 'Inactive'){
          return {
               background:"#F5F5F7",
               color:"#868EA3",
               borderRadius:"100px",
               padding:"5px 15px"
          }
     }
     if(status === 'Blacklist'){
          return {
               background:"#FCE6EB",
               color:"#ED587D",
               borderRadius:"100px",
               padding:"5px 15px"
          }
     }
     if(status === 'Pending'){
          return {
               background:"#FDF7E5",
               color:"#F0C847",
               borderRadius:"100px",
               padding:"5px 15px"
          }
     }
}