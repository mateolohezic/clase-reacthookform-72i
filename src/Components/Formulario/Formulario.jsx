import React from 'react'
import './formulario.css'
import { useForm } from "react-hook-form"

function Formulario() {

    const { register, formState: { errors }, handleSubmit, watch, setValue, reset } = useForm()
    // handleSubmit es una función que recibe como parametro la función que quiero que se ejecute onSubmit.
    // serValue sirve mucho para las secciones de "Editar"
    const limpiar = () => {
        reset()
    }

    const enviarFormulario = (data) => {
        console.log(data)
    }

    return (
    <>
        <div className='contenedorForm'>
            <form onSubmit={handleSubmit(enviarFormulario)}>
                <h1 className='text-center fs-3 mb-3'>Registrarse</h1>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control border-primary" id="nombre" {...register('nombre',{
                        required: true,
                        minLength: 6,
                        maxLength: 25,
                        pattern: /^[A-Za-z' ]{6,30}$/,
                    })}/>
                    { errors.nombre && errors.nombre.type === 'required' && <p className='text-danger fs-6 mt-1'>Inserte un nombre.</p> }
                    { errors.nombre && errors.nombre.type === 'minLength' && <p className='text-danger fs-6 mt-1'>Debe contener al menos 6 caracteres.</p> }
                    { errors.nombre && errors.nombre.type === 'maxLength' && <p className='text-danger fs-6 mt-1'>Debe contener menos de 26 caracteres.</p> }
                    { errors.nombre && errors.nombre.type === 'pattern' && <p className='text-danger fs-6 mt-1'>Nombre invalido.</p> }
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control border-primary" id="correoElectronico" {...register('correoElectronico',{
                        required: true,
                        minLength: 6,
                        maxLength: 25,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    })}/>
                    { errors.correoElectronico && errors.correoElectronico.type === 'required' && <p className='text-danger fs-6 mt-1'>Inserte un correo electrónico.</p> }
                    { errors.correoElectronico && errors.correoElectronico.type === 'minLength' && <p className='text-danger fs-6 mt-1'>Debe contener al menos 6 caracteres.</p> }
                    { errors.correoElectronico && errors.correoElectronico.type === 'maxLength' && <p className='text-danger fs-6 mt-1'>Debe contener menos de 26 caracteres.</p> }
                    { errors.correoElectronico && errors.correoElectronico.type === 'pattern' && <p className='text-danger fs-6 mt-1'>Correo electrónico invalido.</p> }
                </div>
                <div className="mb-3">
                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                    <input type="text" className="form-control border-primary" id="contraseña" {...register('contraseña',{
                        required: true,
                        minLength: 6,
                        maxLength: 25,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,25}$/,
                    })}/>
                    { errors.contraseña && errors.contraseña.type === 'required' && <p className='text-danger fs-6 mt-1'>Inserte una contraseña.</p> }
                    { errors.contraseña && errors.contraseña.type === 'minLength' && <p className='text-danger fs-6 mt-1'>Debe contener al menos 6 caracteres.</p> }
                    { errors.contraseña && errors.contraseña.type === 'maxLength' && <p className='text-danger fs-6 mt-1'>Debe contener menos de 26 caracteres.</p> }
                    { errors.contraseña && errors.contraseña.type === 'pattern' && <p className='text-danger fs-6 mt-1'>Debe tener al menos una mayuscula, una minuscula, y un número.</p> }
                </div>
                <div className="mb-3">
                    <label htmlFor="repetirContraseña" className="form-label">Repetir contraseña</label>
                    <input type="text" className="form-control border-primary" id="repetirContraseña" {...register('repetirContraseña',{
                        required: true,
                        validate: value => value === watch('contraseña')
                    })}/>
                    { errors.repetirContraseña && errors.repetirContraseña.type === 'required' && <p className='text-danger fs-6 mt-1'>Inserte una contraseña.</p> }
                    { errors.repetirContraseña && errors.repetirContraseña.type === 'validate' && <p className='text-danger fs-6 mt-1'>Las contraseñas no coinciden.</p> }
                </div>
                <div className='d-flex gap-2 justify-content-end'>
                    <button type="button" className="btn btn-primary" onClick={limpiar}>Limpiar</button>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default Formulario