import { FC } from 'react'
import HeroText from './hero-text'
import NavbarTwoColumns from './navbar'

type Props = {}

const HeroSection: FC<Props> = (): JSX.Element => {
	return (
		<div className='bg-gray-100'>
			<NavbarTwoColumns />
			<HeroText />
		</div>
	)
}

export default HeroSection
