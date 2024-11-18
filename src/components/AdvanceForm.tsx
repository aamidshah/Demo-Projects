import {useForm, SubmitHandler} from 'react-hook-form'
import './style.css'

interface FormData{
  firstName:string,
  lastName:string,
  email:string,
  city: string,
  country:string,
  state: string,
  zip:string,
  completeLocation:string,
}



const AdvanceForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>()


const onSubmit:SubmitHandler<FormData>= data=>{
  console.log(data)
}


  return (
    <div className='form-container'>
      <h2>Registration Form</h2>

 <form onSubmit={handleSubmit(onSubmit)}>
<div>
  <label htmlFor="firstName">First Name</label>
  <input type="text" id="firstName" {...register("firstName", {required:'First Name is required '})} />
  {errors.firstName && <p>{errors.firstName.message}</p>}
</div>


<div>
  <label htmlFor="lastName">Last Name</label>
  <input type="text" id="lastName" {...register("lastName", {required:'Last Name is required '})} />
  {errors.lastName && <p>{errors.lastName.message}</p>}
</div>

<div>
  <label htmlFor="email">Emial </label>
  <input type="email" id="email" {...register("email", {required:'Email is required ', 
    pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address"}
  })} />
  {errors.email && <p>{errors.email.message}</p>}
</div>

<div>
  <label htmlFor="city">City </label>
  <input type="text" id="city" {...register("city", {required:'City is required '})} />
  {errors.city && <p>{errors.city.message}</p>}
</div>

<div>
  <label htmlFor="state">State</label>
  <input type="text" id="state" {...register("state", {required:'State  is required '})} />
  {errors.state && <p>{errors.state.message}</p>}
</div>

<div>
  <label htmlFor="zip">Zip Code</label>
  <input type="text" id="zip" {...register("zip", {required:'Zip Code is required '})} />
  {errors.zip && <p>{errors.zip.message}</p>}
</div>

<div>
  <label htmlFor="country">Country</label>
  <input type="text" id="country" {...register("country", {required:'Country is required '})} />
  {errors.country && <p>{errors.country.message}</p>}
</div>

<div>
  <label htmlFor="completeLocation"> Complete Location</label>
  <input type="text" id="completeLocation" {...register("completeLocation", {required:'Complete Location is required '})} />
  {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
</div>

<button type='submit'>submit</button>

      </form>
      
    </div>
  )
}

export default AdvanceForm