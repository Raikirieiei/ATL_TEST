import React, { useState } from 'react'
import './mainform.css'
import { Button, Form, Modal, Input, Radio, InputNumber } from 'antd'
import CardItem from '../ components/CardItem'

const MainForm = () => {

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [form] = Form.useForm();

    const list = [
        {
            id: 1,
            name: 'eiei1',
            lastname: 'gum1',
            email:'nonono1@aaa.com',
            gender: 'male',
            tel: '0001',
        },
        {
            id: 2,
            name: 'eiei2',
            lastname: 'gum2',
            email:'nonono2@aaa.com',
            gender: 'female',
            tel: '0002',
        },
        {
            id: 3,
            name: 'eiei3',
            lastname: 'gum3',
            email:'nonono3@aaa.com',
            gender: 'other',
            tel: '0003',
        },
    ]

    const genderArray = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ]

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      };

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
                <Modal
                    title="Add Information"
                    open={openAdd}
                    onCancel={handleCloseAdd}
                    footer={[
                        <Button key="cancel" onClick={handleCloseAdd}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={() => form.submit()}>
                            Submit
                        </Button>,
                    ]}
                >
                    <Form {...formItemLayout} form={form} onFinish={handleSubmitAdd}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Lastname"
                            name="lastname"
                            rules={[{ required: true, message: 'Please enter your last name' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{ required: true, message: 'Please select your gender' }]}
                        >
                            <Radio.Group
                            >
                                {genderArray.map(item =>
                                    <Radio value={item.value}>{item.label}</Radio>
                                )}
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Tel"
                            name="tel"
                            rules={[
                                { required: true, message: 'Please enter your tel number' },
                            ]}
                        >
                            <InputNumber controls={false} style={{width: '100%'}}/>
                        </Form.Item>
                    </Form>
                </Modal>
                <Modal
                    title="Edit Information"
                    open={openEdit}
                    onCancel={handleCloseEdit}
                    footer={[
                        <Button key="cancel" onClick={handleCloseEdit}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={() => form.submit()}>
                            Submit
                        </Button>,
                    ]}
                >
                    <Form {...formItemLayout} form={form} onFinish={handleSubmitEdit}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Lastname"
                            name="lastname"
                            rules={[{ required: true, message: 'Please enter your last name' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{ required: true, message: 'Please select your gender' }]}
                        >
                            <Radio.Group
                            >
                                {genderArray.map(item =>
                                    <Radio value={item.value}>{item.label}</Radio>
                                )}
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Tel"
                            name="tel"
                            rules={[
                                { required: true, message: 'Please enter your tel number' },
                            ]}
                        >
                            <InputNumber controls={false} style={{width: '100%'}}/>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 overflow-auto'>
                {list.map((item) => (
                    <>
                        <CardItem item={item} />
                    </>
                ))}

            </div>

        </div>
    )
}

export default MainForm