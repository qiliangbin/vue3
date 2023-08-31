interface IBgParams {
  type: number
  size?: number
  page?: number
  operator?: string
  update_time?: Date
}

interface IDelParams {
  id: number
  operator: string
}

export type {
  IBgParams,
  IDelParams
}