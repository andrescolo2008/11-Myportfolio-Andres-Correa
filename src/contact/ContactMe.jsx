import React from 'react'
import { useForms } from '../router/components/useForm'

export const ContactMe = () => {
    const formData={
        name:'',
        email: '',
        message:''
      }

      const {name, email,message,onInputChange,formState} = useForms(formData)

  return (
    <div  className="container login-container" >
    <div  className="row">
     

        <div  className="col-mg-4 login-form-2" >
            <h3>Contact Box </h3>
            <form 
            // onSubmit={registerSubmit}
            >
                <div className="form-group mb-2">
                    <input
                        type="text"
                        className="form-control-lg text-center"
                        placeholder="contact name"
                        name="registerName"
                        value={name}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group mb-2">
                    <input
                        type="email"
                        className="form-control-lg text-center"
                        placeholder="email"
                        name="registerEmail"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group mb-2">
                    <input
                        type="text"
                        className="form-control-lg text-center"
                        placeholder="Text me" 
                        name="message"
                        value={message}
                        onChange={onInputChange}
                    />
                </div>

        

                <div className="d-grid gap-2">
                    <input 
                        type="submit" 
                        className="btnSubmit" 
                        value="Enviar" />
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

