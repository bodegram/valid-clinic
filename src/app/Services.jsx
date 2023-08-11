import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/styles/Services.css'
import Service from '../components/Service'
import { useState } from 'react'
import { FaHospital } from 'react-icons/fa'

export default function Services() {
    const data = [
        {
            id: 1,
            title: 'Health care 1',
            text: 'Health is wealth 1',
            category: 'adult',
            isOpen: false
        },
        {
            id: 2,
            title: 'Health care 2',
            text: 'Health is wealth 2',
            category: 'adult',
            isOpen: false
        },
        {
            id: 3,
            title: 'Health care 3',
            text: 'Health is wealth 3',
            category: 'adult',
            isOpen: false
        },
        {
            id: 4,
            title: 'Health care 4',
            text: 'Health is wealth 4',
            category: 'adult',
            isOpen: false
        },
        {
            id: 5,
            title: 'Health care 5',
            text: 'Health is wealth 5',
            category: 'children',
            isOpen: false
        },
    ]

    const [cardOne, setCardOneActive] =  useState(data[0].isOpen)
    const [cardTwo, setCardTwoActive] =  useState(data[1].isOpen)
    const [cardThree, setCardThreeActive] =  useState(data[2].isOpen)
    const [cardFour, setCardFourActive] =  useState(data[3].isOpen)
    const [cardFive, setCardFiveActive] =  useState(data[4].isOpen)
    const [category, setCategory] = useState('all')

    const handleCardOne = () =>{
        setCardOneActive(!cardOne)
    }

    const handleCardTwo = () =>{
        setCardTwoActive(!cardTwo)
    }
    const handleCardThree = () =>{
        setCardThreeActive(!cardThree)
    }
    const handleCardFour = () =>{
        setCardFourActive(!cardFour)
    }
    const handleCardFive = () =>{
        setCardFiveActive(!cardFive)
    }

    console.log(category)
   
  return (
    <div>
         <Navbar/>
         <div className='container'>
            <div className="row">
                <div className="col">
                    <div className='services-title'>Services</div>
                </div>
                <div className="col">
                    <div className='services-header'>Excellent services of our clinic</div>
                    <div className="buttons">
                        <button className='service-button' onClick={()=> {setCategory('all')}}>All</button>
                        <button  className='service-button' onClick={()=> {setCategory('adults')}}>For adult</button>
                        <button  className='service-button' onClick={()=> {setCategory('children')}}>For children</button>
                    </div>
                    <div className="services-body">
                    <Service header={data[0].title} text={data[0].text} handleOpen={handleCardOne} isOpen={cardOne}/>
                    <Service header={data[1].title} text={data[1].text} handleOpen={handleCardTwo} isOpen={cardTwo}/>
                    <Service header={data[2].title} text={data[2].text} handleOpen={handleCardThree} isOpen={cardThree}/>
                    <Service header={data[3].title} text={data[3].text} handleOpen={handleCardFour} isOpen={cardFour}/>
                    <Service header={data[4].title} text={data[4].text} handleOpen={handleCardFive} isOpen={cardFive}/>
                    </div>
                </div>
                <div className="col">
                    <div className="services-last">
                    <div><FaHospital size={25}/></div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}
