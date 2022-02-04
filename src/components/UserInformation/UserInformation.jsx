import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

import { useApp } from '../../contexts/AppProvider';

import InputForm from '../InputForm/InputForm';

import './UserInformation.css';

const UserInformation = ({ setUserValid }) => {
  const { user, setUser } = useApp();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Email requis';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Addresse email invalide';
      }

      if (!values.firstname) {
        errors.firstname = 'Prénom requis';
      }
      
      if (!values.lastname) {
        errors.lastname = 'Nom requis';
      }

      return errors;
    },
    onSubmit: async (values) => {
      // const existingUser = await axios.get(`${process.env.REACT_APP_API_URL}/users?email=${values.email}`);
      
      // if (existingUser) {
      //   const { data } = existingUser;
      //   const userId = data[0].id;
      //   return setUser({...user, userId });
      // }

      try {
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/users`, values);
        setUser(data);
        return setUserValid(true);
      } catch (err){
        return console.log(err);
      }
    },
  });

  
  return (
    <section className="user-information-container">
      <p>
        Pour valider votre commande, entrez vos informations personnelles :{' '}
      </p>
      <p className="form-error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <InputForm
          label="Prénom"
          type="text"
          id="firstname"
          name="firstname"
          value={formik.values.firstname}
          placeholder="Entrez votre prénom"
          onChange={formik.handleChange}
        />
        {formik.errors.firstname ? <div className="form-error">{formik.errors.firstname}</div> : null}
        <InputForm
          label="Nom"
          type="text"
          id="lastname"
          name="lastname"
          value={formik.values.lastname}
          placeholder="Entrez votre nom"
          onChange={formik.handleChange}
        />
        {formik.errors.lastname ? <div className="form-error">{formik.errors.lastname}</div> : null}
        <InputForm
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          placeholder="Entrez votre adresse email"
          onChange={formik.handleChange}
        />
        {formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : null}
        <button type="submit">Validez vos informations</button>
      </form>
    </section>
  );
};

export default UserInformation;
