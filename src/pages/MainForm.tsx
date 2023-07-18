import React, { useState } from 'react'
import './mainform.css'
import { Button, Form, Pagination } from 'antd'
import type { PaginationProps } from 'antd';
import CardItem from '../ components/CardItem'
import ModalForm from '../ components/ModalForm'

const MainForm = () => {

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [form] = Form.useForm();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 4

    const list = [
        {
            id: 1,
            name: 'eiei1',
            lastname: 'gum1',
            email: 'nonono1@aaa.com',
            birthdate: '12/12/2000',
            gender: 'male',
            tel: '0001',
        },
        {
            id: 2,
            name: 'eiei2',
            lastname: 'gum2',
            email: 'nonono2@aaa.com',
            gender: 'female',
            birthdate: '12/12/2000',
            tel: '0002',
        },
        {
            id: 3,
            name: 'eiei3',
            lastname: 'gum3',
            email: 'nonono3@aaa.com',
            gender: 'other',
            birthdate: '12/12/2000',
            tel: '0003',
        },
    ]



    const onChangePage: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrentPage(page);
    };


    const indexLastItem = currentPage *  itemPerPage
    const indexFirstItem = indexLastItem - itemPerPage
    const itemInPage = list.slice(indexFirstItem, indexLastItem)

    
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
                {itemInPage.map((item) => (
                    <>
                        <CardItem item={item} handleOpenEdit={handleOpenEdit} />
                    </>
                ))}

            </div>
            <div className='flex justify-center items-center'>
                <Pagination current={currentPage} onChange={onChangePage} total={list.length} pageSize={itemPerPage} />
            </div>
        </div>
    )
}

export default MainForm