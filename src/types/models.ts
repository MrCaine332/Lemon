export interface IUser {
    id: string
    email: string
    username: string
    isActivated: boolean
    role: string
}

export interface IFormCredentials {
    login: string
    email: string
    username: string
    password: string
    confirmedPassword: string
}

export interface IRecipe {
    _id: number
    title: string
    description: string
    cookingTime: number
    commentsNo: number
    viewsNo: number
    author: string
    createdAt: string
    difficulty: string
    image?: any
}