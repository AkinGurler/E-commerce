import React, { useState } from 'react'
import "./LoginPage.scss"
import { useFormik } from 'formik'
import validationSchema from "./validation"
import { Link, useParams } from 'react-router-dom'


const LoginPage = () => {

  const [isSignUp, setIsSignUp] = useState(false)

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      username: "",
      password: "",
      repassword: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema
  })


  return (
    <div className='loginpage-container'>





      <form className='form' onSubmit={handleSubmit} autoComplete="off">
        <h1>Login Page</h1>
    

        {isSignUp &&
          <div>
            <div className='input'>
              <label htmlFor="email">Email: </label> <br />
              <input className='icon-user'
                autoComplete="off"
                id='email'
                type="text"
                name='email'
                placeholder='akin@gmail.com'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.email && touched.email && <div className='error'>{errors.email}</div>}

            </div>

            <div className='input'>
              <label htmlFor="name">Name: </label> <br />
              <input className='icon-user'
                autoComplete="off"
                id='name'
                type="text"
                name='name'
                placeholder='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.username && touched.username && <div className='error'>{errors.username}</div>}

            </div>

            <div className='input'>
              <label htmlFor="surname">Surname: </label> <br />
              <input className='icon-user'
                autoComplete="off"
                id='surname'
                type="text"
                name='surname'
                placeholder='Surname'
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.surname && touched.surname && <div className='error'>{errors.surname}</div>}

            </div>
          </div>



        }


        <div className='input'>
          <label htmlFor="username">Username: </label> <br />
          <input className='icon-user'
            autoComplete="off"
            id='username'
            type="text"
            name='username'
            placeholder='akin@gmail.com'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur} />
          {errors.username && touched.username && <div className='error'>{errors.username}</div>}

        </div>

        <div className='input'>
          <label htmlFor="password">Password: </label> <br />
          <input
            autoComplete="off"
            className='icon-key'
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="password"

          />
          {errors.password && touched.password && <div className='error'>{errors.password}</div>}
        </div>
        {isSignUp &&
          <div className='input'>
            <label htmlFor="repassword">RePassword: </label> <br />
            <input
              autoComplete="off"
              className='icon-key'
              type="repassword"
              name="repassword"
              id="repassword"
              value={values.repassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="RePassword"

            />
            {errors.repassword && touched.repassword && <div className='error'>{errors.repassword}</div>}
          </div>
        }

        <div className='buttons'>
          <button className='submit-button' type="submit">
            <span >Giriş Yap</span>
          </button>

          <button onClick={() => setIsSignUp((SignUp) => !SignUp)} className='submit-button' >
            <span >Kayıt Ol</span>
          </button>




        </div>

      </form>

    </div>
  )
}

export default LoginPage