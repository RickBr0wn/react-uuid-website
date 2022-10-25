import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = {}

const NavbarTwoColumns: FC<Props> = (): JSX.Element => {
	return (
		<div className='max-w-5xl m-auto h-10 text-[#1a202c] flex items-center justify-between pt-6 px-6'>
			<div className=''>
				<p className='text-transparent text-3xl'>React-UUID</p>
			</div>
			<div className=''>
				<Link href={'https://github.com/RickBr0wn/react-uuid-website'}>
					<a>
						<h1 className='text-[#2d3748] font-medium text-xl cursor-pointer'>
							GitHub
						</h1>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default NavbarTwoColumns
