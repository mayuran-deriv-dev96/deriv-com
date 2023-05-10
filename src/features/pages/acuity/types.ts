import { ReactElement } from 'react'
import { TFlexDirection } from '../../types'
import { TString } from 'types/generics'

export type TAcuityFeatures = {
    id: number
    description: TString
    image: ReactElement
    direction: TFlexDirection
    info_title?: TString
    system_url?: string | ((config: Partial<SystemUrlItemConfig>) => string)
    button_text: TString
}

interface SystemUrlItemConfig {
    is_eu: boolean
}
