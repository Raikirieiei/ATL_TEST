import React, { useState } from 'react'
import './mainform.css'
import { Button, Form, Modal, Input, Radio, InputNumber } from 'antd'
import CardItem from '../ components/CardItem'
import ModalForm from '../ components/ModalForm'

const MainForm = () => {

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [form] = Form.useForm();

    const list = [
        {
            id: 1,
            name: 'eiei1',
            lastname: 'gum1',
            email: 'nonono1@aaa.com',
            gender: 'male',
            tel: '0001',
        },
        {
            id: 2,
            name: 'eiei2',
            lastname: 'gum2',
            email: 'nonono2@aaa.com',
            gender: 'female',
            tel: '0002',
        },
        {
            id: 3,
            name: 'eiei3',
            lastname: 'gum3',
            email: 'nonono3@aaa.com',
            gender: 'other',
            tel: '0003',
        },
    ]

    const handleOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleSubmitAdd = (values: any) => {
        console.log('Submitted values:', values);
        setOpenAdd(false);
    };

    const handleOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitEdit = (values: any) => {
        console.log('Submitted values:', values);
        setOpenEdit(false);
    };

    return (
        <div className='md:container md:mx-auto'>
            <p className='flex justify-center pt-10 text-5xl text-center'>
                CRUD apps
            </p>
            <div className='flex flex-col justify-between items-center py-10 px-5 md:flex-row'>
                <p className='text-2xl text-center'>
                    List of Personal Information
                </p>
                <Button size='large' type='primary' className='w-6/12 md:w-2/12' onClick={handleOpenAdd}>
                    Add
                </Button>
                <ModalForm
                    operation='add'
                    form={form}
                    modalState={openAdd}
                    handleClose={handleCloseAdd}
                    handleSubmit={handleSubmitAdd}
                />
                <ModalForm
                    operation='edit'
                    form={form}
                    modalState={openEdit}
                    handleClose={handleCloseEdit}
                    handleSubmit={handleSubmitEdit}
                />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 overflow-auto'>
                {list.map((item) => (
                    <>
                        <CardItem item={item} handleOpenEdit={handleOpenEdit} />
                    </>
                ))}

            </div>

        </div>
    )
}

export default MainForm