import FormRow from '../../components/FormRaw/FormRow'
import OrderFormSchema from '../../utils/formSchemas/OrderFormSchema'
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../../features/cart/CartSlice'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      validateOnMount: true,
      first_name: "",
      last_name: "",
      city: "",
      zip_code: "",
    },
    validationSchema: OrderFormSchema,
    onSubmit: () => {
      const { first_name, last_name, city, zip_code } = formik.values;

      let booksToOrder = []
      cartItems.forEach((book) => {
        booksToOrder.push({
          id: book.id,
          quantity: book.amount
        })
      })
      const data = {
        order: booksToOrder,
        first_name,
        last_name,
        city,
        zip_code
      }
      dispatch(order(data))
      formik.resetForm()
      navigate('/')
    }
  })

  return (
    <div className='section section-center'>
      <form className='form' onSubmit={formik.handleSubmit}>
        <FormRow
          type="text"
          name="first_name"
          labelText="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
        />
        {formik.errors.first_name && formik.touched.first_name &&
          <span className="form-error"> {formik.errors.first_name}</span>
        }

        <FormRow
          type="text"
          name="last_name"
          labelText="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
        />
        {formik.errors.last_name && formik.touched.last_name &&
          <span className="form-error">{formik.errors.last_name} </span>
        }

        <FormRow
          type="text"
          name="city"
          labelText="City"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.errors.city && formik.touched.city &&
          <span className="form-error">{formik.errors.city} </span>
        }

        <FormRow
          type="text"
          name="zip_code"
          labelText="Zip Code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zip_code}
        />
        {formik.errors.zip_code && formik.touched.zip_code &&
          <span className="form-error">{formik.errors.zip_code} </span>
        }

        <button type="submit" className='btn btn-order' disabled={!(formik.isValid && formik.dirty)}>I ORDER AND PAY</button>
      </form>
    </div>
  )
}

export default Order