import { FC, useState } from 'react'
import Button from '../button/button'
import uuid from 'react-uuid'

type Props = {}

const HeroText: FC<Props> = (): JSX.Element => {
	const [uuidString, setUuidString] = useState<string>(
		'3924fe30-359b-b5d7-f501-68b7d51ff1d3'
	)

	return (
		<div className='h-[500px] max-w-sm md:max-w-5xl m-auto flex flex-col items-center justify-center'>
			<h1 className='text-center text-5xl font-bold text-[#03a9f4] leading-[72px]'>
				React-UUID
			</h1>
			<p className='font-normal text-2xl text-center text-[#718096]'>
				A lightweight package to generate UUID&apos;s for ReactJS projects
			</p>
			<h1 className='mt-6 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#718096]'>
				{uuidString}
			</h1>
			<div className='mt-12 flex flex-col md:flex-row gap-6'>
				<Button
					className='w-[260px]'
					callback={setUuidString}
					title='generate new UUID'
				/>
				<Button
					className='w-[260px]'
					callback={() => navigator.clipboard.writeText(uuidString)}
					title='copy to clip-board'
				/>
			</div>
		</div>
	)
}

export default HeroText
