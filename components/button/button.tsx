import { FC } from 'react'
import uuid from 'react-uuid'

type Props = {
	title: string
	callback?: (uuid: string) => void
	className?: string
}

const Button: FC<Props> = ({ title, callback, className }): JSX.Element => {
	return (
		<button
			onClick={callback ? () => callback(uuid()) : undefined}
			className={`${className} bg-[#03a9f4] text-white py-4 px-6 inline-block text-center rounded-md text-lg font-extrabold uppercase`}
		>
			{title}
		</button>
	)
}

export default Button
