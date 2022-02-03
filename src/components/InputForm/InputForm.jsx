import './InputForm.css';

const InputForm = ({ label, type, id, name, value, placeholder }) => {
  return (
    <div className="input-form">
      <label htmlFor={id}>{label}</label>
      {type !== 'textarea' ? (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <textarea 
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputForm;
