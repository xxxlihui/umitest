import React from 'react'
import IndexLayout from './indexlayout'

export default class index extends React.Component {

    render() {
        const {children, location} = this.props
        if (["/", "", "/person","/find","/community"].includes(location.pathname)) {
            return (
                <IndexLayout {...{location}}>
                    {children}
                </IndexLayout>
            )
        } else {
            return (<div>other layout</div>)
        }

    }
}