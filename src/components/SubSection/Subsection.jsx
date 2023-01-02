import './subsection.css'

const Subsection = ({subsectionTitle,content,last}) => {
  return (
    <div className='subsection' style={{borderBottom: last ? "none":""}}>
        <span className='subsectionTitle'>{subsectionTitle}</span>
        <div className="subsectionContainer">
            {
                content.map((item,index)=>(
                    <div className="tile" key={index}>
                        <span className="tileTitle">{item.title}</span>
                        <span className="tileValue">{item.value}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Subsection