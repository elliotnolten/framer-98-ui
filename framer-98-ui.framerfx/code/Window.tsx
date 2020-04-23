import * as React from "react"
import { Frame, RenderTarget, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Window(props) {
    const { children, title } = props
    return (
        <Frame width="100%" height="100%">
            <div className="window" style={{ height: "100%" }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body" style={{ position: "relative" }}>
                    <div>{children}</div>
                </div>
            </div>
        </Frame>
    )
}

Window.defaultProps = {
    title: "A Window With Stuff In It",
}
