import './InputForm.css';

const InputForm = ({ label, type, id, name, value, placeholder, onChange }) => {
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
          onChange={onChange}
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
