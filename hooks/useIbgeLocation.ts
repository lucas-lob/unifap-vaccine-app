import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getIbgeStates, getIbgeCities } from '@/services/ibge';
import type { IbgeState, IbgeCity } from '@/services/ibge'

const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24

export function useIbgeLocation() {
  const [selectedState, setSelectedState] = useState<IbgeState | null>(null)

  const { data: statesData = [], isLoading: isStatesLoading, error: statesError } = useQuery<IbgeState[]>({
    queryKey: ['ibge', 'states'],
    queryFn: getIbgeStates,
    staleTime: ONE_DAY_IN_MILLISECONDS
  })

  const { data: citiesData = [], isLoading: isCitiesLoading, error: citiesError} = useQuery<IbgeCity[]>({
    queryKey: ['ibge', 'cities', selectedState],
    queryFn: () => getIbgeCities(selectedState!.sigla),
    enabled: !!selectedState?.sigla,
    staleTime: ONE_DAY_IN_MILLISECONDS
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
  
  return {
    states: statesData as IbgeState[],
    selectedState,
    /**
     * Set the selected state by acronym or state name. The acronym is priorized.
     */
    setSelectedState: handleState,
    cities: citiesData as IbgeCity[],
    isLoading: isStatesLoading || isCitiesLoading,
    error: statesError || citiesError
  }
}