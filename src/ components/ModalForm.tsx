import React, { useContext, useState, useEffect } from 'react'
import { Button, Form, Modal, Input, Radio, InputNumber, FormInstance, DatePicker, DatePickerProps } from 'antd'

type ModalProps = {
    operation: string,
    form: FormInstance<any>,
    modalState: boolean,
    handleClose: () => void,
    handleSubmit: (values: any) => void,
    item?: {
        id: number,
        name: string,
        lastname: string,
        email: string,
        gender: string,
        birthdate: string,
        tel: string
    },
    id?: number

}

const ModalForm: React.FC<ModalProps> = ({ operation, handleClose, handleSubmit, modalState, form, item, id }) => {

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

    const customFormat1 = 'DD-MM-YYYY'

    const customFormat: DatePickerProps['format'] = (value) =>
        `${value.format(customFormat1)}`;
        
    const handleFormClose = () => {
        form.resetFields();
        handleClose()
    }

    const handleEditFormSubmit = (values: any) => {
        handleSubmit({ ...values, id })
        form.resetFields();
    }

    const handleAddFormSubmit = (values: any) => {
        handleSubmit(values)
        form.resetFields();
    }
    
    return (
        <Modal
            title={`${operation === 'add' ? 'Add' : 'Edit'} Information`}
            open={modalState}
            onCancel={handleFormClose}
            width={750}
            footer={[
                <Button key="cancel" onClick={handleFormClose}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={() => form.submit()}>
                    Submit
                </Button>,
            ]}
        >
            <Form {...formItemLayout} form={form} onFinish={operation === 'edit' ? handleEditFormSubmit : handleAddFormSubmit}>
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
                    label="Date of Birth"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please select your birth date' }]}
                >
                        <DatePicker style={{ width: '100%' }} format={customFormat} placeholder='DD-MM-YYYY' />
                </Form.Item>
                <Form.Item
                    label="Tel"
                    name="tel"
                    rules={[
                        { required: true, message: 'Please enter your tel number' },
                    ]}
                >
                    <InputNumber controls={false} style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalForm