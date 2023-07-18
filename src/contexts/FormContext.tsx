import React, { createContext, useEffect, useState } from "react";
import { DataType, ContextData } from "../datatypes/dataType";
import dayjs from 'dayjs';

interface Props {
  children: React.ReactNode;
}

const getInitialState = () => {
  const data = localStorage.getItem('data')
  return data ? JSON.parse(data) : []
}

const getInitialCounter = () => {
  const idCounter = localStorage.getItem("counter")
  return idCounter ? JSON.parse(idCounter) : 1
}
export const DataContext = createContext<ContextData | null>(null);

const DataProvider: React.FC<Props> = ({ children }) => {
  const [datas, setData] = useState<DataType[]>(getInitialState);
  const [idCounter, setIdCounter] = useState<number>(getInitialCounter);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(datas));
  }, [datas]);

  const addData = (data: DataType) => {
    const formattedBirthdate: string = dayjs(data.birthdate).format('DD-MM-YYYY');
    const newData: DataType = {
      id: idCounter,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      gender: data.gender,
      birthdate: formattedBirthdate,
      tel: data.tel
    }
    setData([...datas, newData])
    localStorage.setItem('counter', JSON.stringify(idCounter))
    setIdCounter(prev => prev+1)
  }

  const updateData = (data: DataType) => {
    console.log('data', data);
    
    const formattedBirthdate: string = dayjs(data.birthdate).format('DD-MM-YYYY');

    const dataIndex = datas.findIndex((item) => item.id === data.id);

    if (dataIndex !== -1) {
      const updatedItem: DataType = {
        id: data.id,
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        gender: data.gender,
        birthdate: formattedBirthdate,
        tel: data.tel
      };
  
      const updatedDatas = [...datas];

      updatedDatas[dataIndex] = updatedItem;
  
      setData(updatedDatas);
    }
  }

  const deleteData = (id: number) => {
    const newData = datas.filter((data) => data.id !== id);
      setData([...newData])
  }

  return (
    <DataContext.Provider value={{ datas, addData, updateData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider

