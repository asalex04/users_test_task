export interface IUser {
    id: number
    email: string
    name: string
    lastName?: string,
    password: string,
    photo?: string,
    myDate: string,
    gender?: 'male' | 'female'
}
