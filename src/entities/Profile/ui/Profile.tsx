import { WithLazyReducers } from '@/shared/lib'
import { profileReducer } from '../model/slice/profileSlice'

interface ProfileProps {}

export const Profile = (props: ProfileProps) => {
	return (
		<WithLazyReducers name="profile" reducer={profileReducer} >
			<div>Profile</div>
		</WithLazyReducers>
	)
}
