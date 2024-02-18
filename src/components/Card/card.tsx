'use client'
import tigerImg from '/public/tiger.png'
import backOfCard from '/public/backOfCard.png'
import Image from 'next/image'
import { useState } from 'react'

function Card(info: any) {
	let testView: boolean = false
	const [viewwCard, setViewCard] = useState(false)
	const [counter, setCounter] = useState(0)
	const onNotFlipClick = () => {
		setViewCard(true)
		setCounter(el => (el += 1))
	}
	console.log(viewwCard)
	return (
		<>
			{viewwCard ? (
				<div className="w-64 min-h-80 bg-amber-400 	rounded-lg flex items-center justify-center flex-col cursor-pointer">
					<Image src={tigerImg} className="mb-2 w-44" alt="tigerImg" />
					<div className="text-xl font-bold text-white">호랑이</div>
				</div>
			) : (
				<div className="w-64 min-h-80 bg-amber-100 	rounded-lg flex items-center justify-center cursor-pointer">
					<Image src={backOfCard} className="mb-2 w-44" alt="tigerImg" />
				</div>
			)}
			{counter}
		</>
	)
}
export default Card
