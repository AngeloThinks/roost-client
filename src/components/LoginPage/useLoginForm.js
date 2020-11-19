import { useLoginState, useLoginEffect } from 'react';

const useLoginForm = (callback, validate) => {
  const [values, setValues] = useLoginState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useLoginState({});
  const [isSubmitting, setIsSubmitting] = useLoginState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useLoginEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useLoginForm;
