import { FC, useState } from 'react'
import * as styles from './style.module.scss'
import { useTranslation } from 'react-i18next'
import { Profile } from '@/entities/Profile'
import { profileActions } from '@/entities/Profile/model/slice/profileSlice'
import { useDispatch } from 'react-redux'

const AboutPage: FC = () => {
	const [visible, setVisible] = useState(false)
	const dispatch = useDispatch()
	const { t } = useTranslation('about')

	return (
		<div className={styles.aboutPage}>
			<h2>{t('About page')}</h2>
			<h1>{visible? 'true': 'false'}</h1>
			<button onClick={(prev) => setVisible(true)}>Show Profile</button>
			<button onClick={(prev) => setVisible(false)}>close modal</button>
			<button onClick={() => dispatch(profileActions.setName())}>set Name</button>
			{visible ? <Profile /> : null}
		</div>
	)
}

export default AboutPage
