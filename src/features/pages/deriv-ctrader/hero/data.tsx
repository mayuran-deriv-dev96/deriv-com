import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'features/components/atoms/image'
import DerivCtraderWaterMark from 'images/svg/deriv-ctrader/deriv-ctrader-watermark.svg'
import { DerivProductContentType } from 'features/components/molecules/deriv-products-hero/types'

export const hero_content_data: DerivProductContentType = {
    main_title: ['_t_A feature-rich_t_', '_t_CFD trading_t_', '_t_platform_t_'],
    hero: (
        <StaticImage
            src="../../../../images/common/deriv-ctrader/hero-desktop.png"
            alt="Deriv ctrader online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    hero_mobile: (
        <StaticImage
            src="../../../../images/common/deriv-ctrader/hero-mobile.png"
            alt="Deriv ctrader online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: <Image src={DerivCtraderWaterMark} height={64} alt={'_t_Deriv ctrader logo_t_'} />,
    mobile_logo: <Image src={DerivCtraderWaterMark} height={32} alt={'_t_Deriv ctrader logo_t_'} />,
}
