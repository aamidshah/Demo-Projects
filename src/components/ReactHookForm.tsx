import { SubmitHandler, useForm } from "react-hook-form";

//  register is useed to connect intput feilds to the form,
//  handleSubmit is used to handle the form submission
// formState is used to get the form state
//  errors is used to get the form errors if it contains any

interface FormData {
  name: string;
  email: string;
  password: string;
}

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id= 'name'
          {...register("name", { required: "Name is required" })}
        />

        {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id= 'email'
          {...register("email", { required: "Email is required" })}
        />

        {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}

        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id= 'password'
          {...register("password", { minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          } })}
          
        />

        {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}


      </div>
      <button disabled={isSubmitting}>{isSubmitting ? "Submitting...": 'submit'}</button>
    </form>
  );
};

export default ReactHookForm;
