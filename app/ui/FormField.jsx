import React from 'react'

const FormField = ({label, id, onChange, value, type = "text", required}) => {
  return (
    <div className="campo w-full flex flex-col md:flex-row md:justify-start">
          <label htmlFor={id} className="w-full text-left p-2 md:w-1/4">
            {label}
          </label>
          <input
            type={type}
            name=""
            id={id}
            className="w-full text-left outline-none border-b border-[--text-100] bg-transparent focus:bg-[--bg-200] p-2 md:w-1/2"
            required={required}
            onChange={onChange}
          />
        </div>
  )
}

export default FormField