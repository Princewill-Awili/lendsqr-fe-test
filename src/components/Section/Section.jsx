import { useContext } from 'react'
import { states } from '../../utils/context'
import './section.css'
import Users from '../Users/Users'

const Section = () => {

  const { activeSection } = useContext(states);
     
  return (
    <div className='section'>
     <h2 className="sectionTitle">{activeSection}</h2>
     {activeSection === 'Users' && <Users/>}
     
    </div>
  )
}

export default Section