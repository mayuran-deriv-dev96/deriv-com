import React from 'react'
import clsx from 'clsx'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import { wrapper_ltr, wrapper_rtl } from './styles.module.scss'
import CfdWarningBanner from './cfd-warning-banner'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 5000))
const WhatsappButton = loadable(() => pMinDelay(import('./whats-app-button'), 5000))
const CookieBanner = loadable(() => pMinDelay(import('./cookie-banner'), 5000))
const WarningBanner = loadable(() => pMinDelay(import('./warnings-alerts'), 5000))

function calculatePercentageOfNumber(percentage: number, number: number) {
    const result = (percentage / 100) * number
    return result.toFixed(2)
}

const LayoutOverlay = () => {
    const is_rtl = useIsRtl()
    const { visibilityPercentage } = useFloatingCtaContext()
    const isLiveChat = useThirdPartyFlags('chat.live_chat')
    const isWhatsappChat = useThirdPartyFlags('chat.whatsapp_chat')
    const [is_mounted] = usePageLoaded()
    return (
        <div
            className="flex flex-col justify-end items-stretch w-full fixed pointer-events-none inset-50 z-40"
            id="overlay-container"
        >
            <div
                className={clsx(
                    'flex flex-col-reverse justify-between items-end',
                    is_rtl ? wrapper_rtl : wrapper_ltr,
                )}
            >
                <div
                    className={clsx(
                        'flex basis-6/12 flex-grow',
                        is_rtl ? 'justify-end' : 'justify-start',
                    )}
                >
                    <CookieBanner />
                </div>

                <div className={'flex flex-grow justify-center'}>
                    <WarningBanner />
                </div>

                <div
                    className="flex flex-col"
                    style={{
                        marginBlockEnd: `${calculatePercentageOfNumber(
                            100 - visibilityPercentage,
                            68,
                        )}px`,
                    }}
                >
                    {isLiveChat && <LiveChatButton />}
                    {isWhatsappChat && <WhatsappButton />}
                </div>
            </div>
            {is_mounted && <CfdWarningBanner />}
        </div>
    )
}

export default LayoutOverlay
