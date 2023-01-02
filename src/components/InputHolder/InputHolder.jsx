import './inputholder.scss'

const InputHolder = ({users,inputType,label,placeholder}) => {
  return (
    <div className='inputholder'>
     <label htmlFor={label}>{label}</label>
     {
          inputType === 'select'  ? 
          (
               <select name={label} id={label}>
                    <option value={inputType}>{inputType}</option>
               </select>
          )
          :
          (
               <input type={inputType.toLowerCase()} placeholder={placeholder} />
          )
     }
     
    </div>
  )
}

export default InputHolder