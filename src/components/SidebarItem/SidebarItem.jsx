import { useContext } from 'react'
import { states } from '../../utils/context'
import './sidebarItem.css'

const SidebarItem = ({icon,txt,arrow,type}) => {

  const {activeSection, setActiveSection, setLoading} = useContext(states);

  const allowActive = () => {
     if(type !== 'head' && type !== 'dash' && type !== 'switch'){
          setLoading(true);
          setActiveSection(txt);
          setTimeout(()=>{
               setLoading(false);
          },500)
          
     }else{
          return
     }
  }

  return (
    <div 
          className={activeSection === txt ? 'sbItem sbItemActive' : 'sbItem' } 
          style={{marginBottom: (type==='switch' || type === 'dash' ?"30px":"0px")}}
          onClick={allowActive}
     >
     {icon && (<img src={icon} alt="icon" className='sbItemIcon'/>)}
     <p className={type==='head'?"sbItemTxt head" : "sbItemTxt"}>{txt}</p>
     {arrow && (<img src={arrow} alt='icon'/>)}
    </div>
  )
}

export default SidebarItem