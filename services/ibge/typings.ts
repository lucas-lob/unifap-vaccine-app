interface IbgeRegion {
  id: number
  sigla: string
  nome: string
}

export interface IbgeState {
  id: number
  sigla: string
  nome: string
  regiao: IbgeRegion
}

export interface IbgeCity {
  id: number
  nome: string
}