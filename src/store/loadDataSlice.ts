import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface PageLoadingState {
  isLoading: boolean
}

const initialState: PageLoadingState = {
  isLoading: false,
}

export const pageLoadingSlice = createSlice({
  name: 'pageLoading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading } = pageLoadingSlice.actions

export default pageLoadingSlice.reducer