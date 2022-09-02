import customFetch from '../../utils/axios'

export const OrderThunk = async (url, data, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, data)
    console.log(resp.data);
    return resp.data


  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}