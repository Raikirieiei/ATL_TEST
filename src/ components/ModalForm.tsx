import React from 'react'
import { Button, Form, Modal, Input, Radio, InputNumber, FormInstance, DatePicker, DatePickerProps } from 'antd'

type ModalProps = {
    operation: string,
    form: FormInstance<any>,
    modalState: boolean,
    handleClose: () => void,
    handleSubmit: (values: any) => void
}

const ModalForm: React.FC<ModalProps> = ({ operation, handleClose, handleSubmit, modalState, form }) => {


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

    const customFormat1 = 'DD/MM/YYYY'

    const customFormat: DatePickerProps['format'] = (value) =>
    `${value.format(customFormat1)}`;

    return (
        <Modal
            title={`${operation == 'add' ? 'Add' : 'Edit'} Information`}
            open={modalState}
            onCancel={handleClose}
            width={750}
            footer={[
                <Button key="cancel" onClick={handleClose}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={() => form.submit()}>
                    Submit
                </Button>,
            ]}
        >
            <Form {...formItemLayout} form={form} onFinish={handleSubmit}>
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
                    <DatePicker style={{ width: '100%' }} format={customFormat}  />
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