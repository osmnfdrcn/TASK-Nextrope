import * as Yup from 'yup'

const OrderFormSchema = Yup.object().shape({
  first_name: Yup.string().required('required').min(4).max(50),
  last_name: Yup.string().required('required').min(5).max(50),
  city: Yup.string().required('required'),
  zip_code: Yup.string().required('required').matches(
    /\d{2}-\d{3}/,
    "please enter a valid zip code"
  ),

})


export default OrderFormSchema 