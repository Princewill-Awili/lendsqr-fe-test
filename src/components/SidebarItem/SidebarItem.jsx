import './sidebarItem.css'

const SidebarItem = ({icon,txt,arrow,type}) => {
  return (
    <div className='sbItem' style={{marginBottom: (type==='switch' || type === 'dash' ?"30px":"0px")}}>
     {icon && (<img src={icon} alt="icon" className='sbItemIcon'/>)}
     <p className={type==='head'?"sbItemTxt head" : "sbItemTxt"}>{txt}</p>
     {arrow && (<img src={arrow} alt='icon'/>)}
    </div>
  )
}

export default SidebarItem