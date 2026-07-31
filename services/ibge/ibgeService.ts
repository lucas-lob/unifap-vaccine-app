import { IbgeCity, IbgeState } from "./typings"

const BASE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades"

/**
 * Get states from IBGE Api
 */
export const getIbgeStates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/estados`)
    const data = await response.json() as IbgeState[]

    return data
  }
  catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Get cities from IBGE Api
 * @param stateAcronym the acronym of the brazillian state, example: AP for Amapá 
 */
export const getIbgeCities = async (stateAcronym: string) => {
  try {
    const response = await fetch(`${BASE_URL}/estados/${stateAcronym}/municipios`)
    const data = await response.json() as IbgeCity[]

    return data
  }
  catch (error) {
    console.error(error)
    throw error
  }
}