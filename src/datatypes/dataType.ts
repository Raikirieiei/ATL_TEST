export interface DataType{
    id: number,
    name: string,
    lastname: string,
    email: string,
    gender: string,
    birthdate: string,
    tel: string
}

export type ContextData = {
    datas: DataType[],
    addData: (data: DataType) => void,
    updateData: (data: DataType) => void,
    deleteData: (id: number) => void
}