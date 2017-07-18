import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from './components/Picker'

class App extends Component {
    render(){
        const { selectReddit } = this.props
        return (
            <div>
                <Picker
                    value={selectReddit}
                    onChange={this.selectReddit}
                    options={[ 'reactjs', 'frontend' ]}
                />
            </div>
        )
    }
}
