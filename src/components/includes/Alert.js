import React from 'react'

class Alert extends React.Component {
    render() {
        return (
            <div 
                className="
                    my-12
                    text-base
                    px-5
                    py-4
                    bg-white
                    border border-gray-300
                    rounded-lg
                "
                >
                    <div className="font-semibold text-lg mb-1">{this.props.alertHeader}</div>
                    {this.props.alertContent}
                </div>
            )
    }
}

export default Alert;