import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import "98.css"

export function Button(props) {
    const { label, onTap } = props

    return <button onClick={onTap}>{label}</button>
}

Button.defaultProps = {
    label: "Click me",
    onTap: () => null,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Button, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Click me",
    },
})
