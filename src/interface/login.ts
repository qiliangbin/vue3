interface ILoginRegister {
  name: string
  password: string
}

interface IRegister extends ILoginRegister {
  role: number
}

export type{
  ILoginRegister,
  IRegister
}