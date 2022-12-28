import './highlight.css'

const Highlight = ({icon,num,txt, color}) => {
  return (
    <div className='highlight'>
     <div className="hlCircle" style={{background:color}}>
          <img src={icon} alt="icon" className='hlIcon'/>
     </div>
     <p className="hlTxt">{txt}</p>
     <h2 className='hlNum'>{num}</h2>
    </div>
  )
}

export default Highlight