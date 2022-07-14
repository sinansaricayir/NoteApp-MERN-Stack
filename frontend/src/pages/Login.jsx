import React,{useState} from 'react'
import {FaUserCheck} from 'react-icons/fa'

function Login() {


const [formData,setFormData] = useState({

    email:'',
    parola:'',
  })

  const {email,parola} = FormData

  const onChange = (e) => {
    setFormData((onceki)=>({ 
      ...onceki,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  } 

  return (
    <>

    <section className='heading'>
      <h1>
        <FaUserCheck/> Üye Girişi
      </h1>
    </section>

    <section className='form'>

      <form onSubmit={onSubmit} >

        <div className='form-group'>
        <input type='email' className='form-control' id='email' name ='email' value={email} placeholder ='E-mail Giriniz' onChange={onChange} />
        </div>

        <div className='form-group'>
        <input type='password' className='form-control' id='parola' name ='parola' value={parola} placeholder ='Parolanızı Giriniz' onChange={onChange} />
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-block'>Giriş Yap</button>
        </div>

      </form>

    </section>

    </>
  )
}

export default Login