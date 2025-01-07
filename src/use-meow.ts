import { createContext, useContext } from 'solid-js'
import { MeowState } from './types'

const MeowContext = createContext<MeowState>()
export const MeowProvider = MeowContext.Provider
export function useMeow() {
  const context = useContext(MeowContext)
  if (!context) {
    throw `MeowContext is undefined`
  }
  return context
}
