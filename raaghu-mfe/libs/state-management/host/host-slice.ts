import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type hostInitialState = {
  loading : boolean,
  configuration : any,
  error : string,
}

const hostInitialState : hostInitialState = {
  loading : false,
  configuration : null,
  error : "",
}

const proxy =new ServiceProxy();

export const fetchApplicationConfig = createAsyncThunk('host/fetchApplicationConfig',() => {
    return proxy.applicationConfiguration(false).then((result:any) =>{
        console.log("result",result)
        return result
    })
})


const hostSlice = createSlice({
  name: 'host',
  initialState:hostInitialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchApplicationConfig.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchApplicationConfig.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.configuration = action.payload
      state.error = ''
    });
    builder.addCase(fetchApplicationConfig.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
  },
})

export default hostSlice.reducer