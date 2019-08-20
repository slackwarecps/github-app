'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ isDisabled, handleSearch }) => (

    <div>
        <div><h2>Pesquise por um usuario no github</h2></div>

        <div className='search'>
            <input
                type='search'
                placeholder='Digite o nome do usuário no GitHub, por exemplo slackwarecps!!! :)'
                disabled={isDisabled}
                onKeyUp={handleSearch}
            />
        </div>

    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search
