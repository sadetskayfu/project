import { createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, extraArgument, StateSchema } from '@/app/providers/store';

export const createAppSelector = createSelector.withTypes<StateSchema>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<StateSchema>()
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: StateSchema
	dispatch: AppDispatch
	extra: typeof extraArgument
}>()