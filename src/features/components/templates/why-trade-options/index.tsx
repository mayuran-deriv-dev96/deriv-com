import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Flex from 'features/components/atoms/flex-box'
import TradeItem, { TradeItemType } from 'features/components/molecules/trade-item'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'
import LinkButton from 'features/components/atoms/link-button'

export type WhyTradeOptionsType = {
    heading: TString
    heading2: TString
    button: {
        text: TString
        url: LinkUrlType
    }
    items: TradeItemType[]
}

const WhyTradeOptions = ({ data }: { data: WhyTradeOptionsType }) => {
    return (
        <Container.Fixed as="section" bgcolor="black" padding_block="40x">
            <Container.Fluid>
                <Typography.Heading
                    as="h2"
                    textcolor="inverted"
                    align="center"
                    size="small"
                    mb="20x"
                >
                    <Localize translate_text={data.heading} />
                </Typography.Heading>
                <Flex.Box gap="20x" wrap="wrap" justify="center">
                    {data.items.map((item) => (
                        <TradeItem key={item.heading} data={item} />
                    ))}
                </Flex.Box>
                <Flex.Box direction="col" align="center" mt="20x">
                    <Typography.Heading as="h4" textcolor="inverted" size="xxs" mb="8x">
                        <Localize translate_text={data.heading2} />
                    </Typography.Heading>
                    <LinkButton.Primary url={data.button.url}>
                        <Localize translate_text={data.button.text} />
                    </LinkButton.Primary>
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default WhyTradeOptions
