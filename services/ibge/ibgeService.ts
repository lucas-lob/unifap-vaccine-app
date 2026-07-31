import { IbgeCity, IbgeState } from "./typings"

const BASE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades"

/**
 * Get states from IBGE Api
 */
export const getIbgeStates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/estados?orderBy=nome`)

    if (!response.ok) {
      throw new Error(`Error in the IBGE states fetching: [${response.status}] ${response.statusText}`)
    }

    return (await response.json()) as IbgeState[]
  }
  catch (error) {
    throw error
  }
}

/**
 * Get cities from IBGE Api
 * @param stateAcronym the acronym of the brazillian state, example: AP for Amapá 
 */
export const getIbgeCities = async (stateAcronym: string) => {
  const sanitizedStateAcronym = stateAcronym.toUpperCase().trim()

  if (!sanitizedStateAcronym) return []

  try {
    const response = await fetch(`${BASE_URL}/estados/${sanitizedStateAcronym}/municipios?orderBy=nome`)

    if (!response.ok) {
      throw new Error(`Error in the IBGE states fetching: [${response.status}] ${response.statusText}`)
    }

    return (await response.json()) as IbgeCity[]
  }
  catch (error) {
    throw error
  }
}