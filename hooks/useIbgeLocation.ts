import { useQuery } from '@tanstack/react-query';

import { getIbgeStates, getIbgeCities } from '@/services/ibge';

import type { IbgeState, IbgeCity } from '@/services/ibge'
import { useCallback, useEffect, useState } from 'react';

export function useIbgeLocation() {
  const [selectedState, setSelectedState] = useState<IbgeState | null>(null)
  const [cities, setCities] = useState<IbgeCity[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { data: statesData, isLoading: queryIsLoading, error } = useQuery<IbgeState[]>({
    queryKey: [],
    queryFn: getIbgeStates
  })

  const handleState = useCallback((acronym?: string, stateName?: string) => {
    if (!statesData || (!acronym && !stateName)) return
    
    let filteredState: IbgeState | null = null

    if (acronym) {
      filteredState = statesData.find(state => state.sigla === acronym) ?? null
    } else {
      filteredState = statesData.find(state => state.nome === stateName) ?? null
    }

    setSelectedState(filteredState)
  }, [statesData])


  useEffect(() => {
    if (!selectedState) return

    const updateCities = async () => {
      setIsLoading(true)
      const citiesResponse = await getIbgeCities(selectedState.sigla)
      setCities(citiesResponse)
      setIsLoading(false)
    }
    
    updateCities()
  }, [selectedState])
  
  return {
    states: (statesData ?? []) as IbgeState[],
    selectedState,
    /**
     * Set the selected state by acronym or state name. The acronym is priorized.
     */
    setSelectedState: handleState,
    cities,
    isLoading: isLoading || queryIsLoading,
    error
  }
}