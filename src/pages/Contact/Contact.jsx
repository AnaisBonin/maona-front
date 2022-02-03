import InputForm from '../../components/InputForm/InputForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Contact.css';

const Contact = () => {

  return (
    <main className="contact-page-container">
      <PageTitle title="Contactez-nous" />
      <form action={`mailto:${process.env.REACT_APP_EMAIL}`} className="contact-page-form">
        <InputForm 
          label="Prénom"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Entrez votre prénom"
        />
        <InputForm 
          label="Nom"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Entrez votre nom"
        />
        <InputForm 
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre email"
        />
        <InputForm
          label="Votre message"
          type="textarea"
          id="message"
          name="message"
          placeholder="Entrez votre message"
        />
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
};

export default Contact;
