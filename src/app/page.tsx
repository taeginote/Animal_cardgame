import Link from 'next/link'
import Image from 'next/image'
import tigerImg from '/public/tiger.png'

export default function Home() {
	return (
		<div className="bg-amber-200 w-dvw h-dvh flex justify-center items-center flex-col ">
			<div className="mb-8 text-6xl text-white">동물 카드게임</div>
			<Image src={tigerImg} className="mb-4" alt="tigerImg" />
			<h3 className=" border-solid border-2 border-amber-400 px-8 py-4 rounded-full hover:bg-amber-400">
				<Link href="/play">게임하러가기3313122</Link>
			</h3>
		</div>
	)
}
