import React from 'react'
import { FullPageContainer } from '../../styles/components.styled'
import { TbLoaderQuarter } from 'react-icons/tb'
import Loading from './Loading'

const HomeLoader = ({ empty, loading }: { empty: boolean, loading: boolean }) => {
    return (
        <FullPageContainer>
            {empty ? (
                <div>
                    <h2>No Books Found</h2>
                </div>
            ) : loading ? (
                <Loading />
            ) : null}
        </FullPageContainer>
    )
}

export default HomeLoader