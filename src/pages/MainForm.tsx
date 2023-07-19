import React, { useContext, useState } from 'react'
import './mainform.css'
import { Button, Form, Pagination } from 'antd'
import type { PaginationProps } from 'antd';
import CardItem from '../ components/CardItem'
import ModalForm from '../ components/ModalForm'
import { DataContext } from '../contexts/FormContext';
import { ContextData } from "../datatypes/dataType";

const MainForm = () => {

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [thisId, setThisId] = useState(0);
    const [form] = Form.useForm();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 4

    const { datas, idCounter, addData, updateData, deleteData } = useContext(DataContext) as ContextData

    const onChangePage: PaginationProps['onChange'] = (page) => {
        setCurrentPage(page);
    };


    const indexLastItem = currentPage * itemPerPage
    const indexFirstItem = indexLastItem - itemPerPage
    const itemInPage = datas.slice(indexFirstItem, indexLastItem)


    const handleOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleSubmitAdd = (values: any) => {
        const id = idCounter
        addData({ ...values, id });
        setOpenAdd(false);
    };

    const handleOpenEdit = (id: number) => {
        setThisId(id)
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitEdit = (values: any) => {
        updateData(values)
        setOpenEdit(false);
    };

    const handleDelete = (id: number) => {
        deleteData(id)
    }

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
                    id={thisId}
                />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 overflow-auto'>
                {itemInPage.map((item) => (
                    <>
                        <CardItem key={item.id} item={item} handleOpenEdit={handleOpenEdit} deleteData={handleDelete} />
                    </>
                ))}

            </div>
            <div className='flex justify-center items-center'>
                <Pagination current={currentPage} onChange={onChangePage} total={datas.length} pageSize={itemPerPage} />
            </div>
        </div>
    )
}

export default MainForm