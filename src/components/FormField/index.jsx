import './form-field.css'



export function FormField({ label, id, tipo, name }) {
    return (
        <div className='campo-form'>
            <label htmlFor={id} className='label-form'>{ label }</label>
            <input type={ tipo } placeholder={ label } id={id} name={ name } className='input-form' />
        </div>
    )
}