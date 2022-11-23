import React from 'react'
import { TbLoaderQuarter } from 'react-icons/tb'
import { colors } from '../../utils/constant.utils'

const Loading = ({ size = 50 }: { size?: number }) => {
    return <TbLoaderQuarter
        size={size}
        color={colors.glass.white}
        className="rotate"
    />
}

export default Loading