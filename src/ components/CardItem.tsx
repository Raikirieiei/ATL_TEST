import React from 'react'
import { Card, Button } from 'antd'
import './carditem.css'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

type CardProps = {
    item: {
        id: number,
        name: string,
        lastname: string,
        email: string,
        gender: string,
        tel: string
    };
}

const CardItem: React.FC<CardProps> = ({ item }) => {

    const ExtraCard = () => {
        return (
            <div>
                <Button className='mx-2'> <AiFillEdit /> </Button>
                <Button> <AiFillDelete /> </Button>
            </div>
        )
    }
    return (
        <div className='mx-4 mb-4'>
            <Card title={`${item.name} ${item.lastname}`} extra={<ExtraCard />} className='my-card'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='flex'>
                        <p className='font-bold pr-2'>Tel:</p>
                        <p>{item.tel}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-bold pr-2'>Email:</p>
                        <p>{item.email}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-bold pr-2'>Gender:</p>
                        <p>{item.gender}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardItem