interface ILoginRegister {
  name: string
  password?: string
}

interface IRegister extends ILoginRegister {
  role: number
}

interface IForgetForm extends ILoginRegister {
  newPassword: string
  sureNewPassword?: string
  isForget?: boolean
}


export type{
  ILoginRegister,
  IRegister,
  IForgetForm
}