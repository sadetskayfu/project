import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import './style.scss'

const NotFoundPage: FC = () => {
	const { t } = useTranslation()

	return <div>Not Found Page</div>
}

export default NotFoundPage
