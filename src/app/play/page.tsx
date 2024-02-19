'use client'
import Card from '@/components/Card/card'
import { useState } from 'react'

function Play() {
	let testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const [cardList, setCardList] = useState([
		{
			id: 1,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 2,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 1,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 2,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 3,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 4,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 5,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 6,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 7,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
		{
			id: 8,
			imgUrl: '/public/tiger.png',
			isFlip: false,
		},
	])

	/**
	 * 카드 게임
	 * 카드를 누르면 하나가 뒤집히고 또 하나를 누르면 또 하나가 뒤집히고 그것이 둘이 겹치면 뒤집은거 유지
	 * 겹치지 않으면 둘다 다시 뒤집다
	 */
	return (
		<div className="bg-amber-200 w-dvw h-dvh flex justify-center items-center flex-col ">
			<div className="mb-8 text-3xl text-amber-700">
				당신의 집중력을 보여주세요
			</div>
			<div className="inline-grid grid-cols-5 gap-4">
				{cardList.map(el => (
					<Card info={el} />
				))}
			</div>
		</div>
	)
}
export default Play
