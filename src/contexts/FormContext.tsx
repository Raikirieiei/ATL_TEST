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

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(idCounter))
  }, [idCounter]);

  const addData = (data: DataType) => {
    const formattedBirthdate: string = dayjs(data.birthdate).format('DD-MM-YYYY');
    const newData: DataType = {
      id: data.id,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      gender: data.gender,
      birthdate: formattedBirthdate,
      tel: data.tel
    }
    setData([...datas, newData])
    setIdCounter(prev => prev+1)
  }

  const updateData = (data: DataType) => {
  
    const dataIndex = datas.findIndex((item) => item.id === data.id);
    const formattedBirthdate: string = dayjs(data.birthdate).format('DD-MM-YYYY');

    const newUpdatedData: DataType = {
      id: data.id,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      gender: data.gender,
      birthdate: formattedBirthdate,
      tel: data.tel
    }

    const updatedDatas = [...datas];

    updatedDatas[dataIndex] = newUpdatedData;

    setData(updatedDatas);

  }

  const deleteData = (id: number) => {
    const newData = datas.filter((data) => data.id !== id);
      setData([...newData])
  }

  return (
    <DataContext.Provider value={{ datas, idCounter, addData, updateData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider

