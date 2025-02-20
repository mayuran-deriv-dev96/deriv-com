import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dbot from './data/_dbot'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import useRegion from 'components/hooks/use-region'
import ProtectedRoute from 'features/components/molecules/protected-route'

const DBot = () => {
    const { is_eu, is_region_loading } = useRegion()

    return (
        <ProtectedRoute
            is_page_visible={!is_eu}
            component={<QuestionsTemplate data={dbot} />}
            is_loading={is_region_loading}
        />
    )
}
export default WithIntl()(DBot)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | DBot | Deriv_t_"
        description="_t_Frequently asked questions - DBot_t_"
        pageContext={pageContext}
    />
)
