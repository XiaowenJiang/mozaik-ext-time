import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import mapping from './characters_mapping'
import {
    PartTopRight,
    PartTopLeft,
    PartRightTop,
    PartRightBottom,
    PartBottomRight,
    PartBottomLeft,
    PartLeftBottom,
    PartLeftTop,
    PartCenterTop,
    PartCenterBottom,
    PartCenterLeft,
    PartCenterRight,
} from './parts'

import ObliquePart from './parts/ObliquePart'

export default class DigitalChar extends PureComponent {
    static propTypes = {
        char: PropTypes.oneOf(Object.keys(mapping)).isRequired,
        color: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        stroke: PropTypes.number.isRequired,
        spacing: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }

    static defaultProps = {
        spacing: 2,
        x: 0,
        y: 0,
    }

    render() {
        const { char, color, width, height, stroke, spacing, x, y } = this.props

        const shape = mapping[`${char}`]

        const shapeProps = { width, height, stroke, spacing, color }

        return (
            <g transform={`translate(${x}, ${y})`}>
                <PartTopLeft {...shapeProps} isActive={shape.topLeft} />
                <PartTopRight {...shapeProps} isActive={shape.topRight} />
                <PartRightTop {...shapeProps} isActive={shape.rightTop} />
                <PartRightBottom {...shapeProps} isActive={shape.rightBottom} />
                <PartBottomRight {...shapeProps} isActive={shape.bottomRight} />
                <PartBottomLeft {...shapeProps} isActive={shape.bottomLeft} />
                <PartLeftBottom {...shapeProps} isActive={shape.leftBottom} />
                <PartLeftTop {...shapeProps} isActive={shape.leftTop} />
                <PartCenterLeft {...shapeProps} isActive={shape.centerLeft} />
                <PartCenterRight {...shapeProps} isActive={shape.centerRight} />
                <PartCenterTop {...shapeProps} isActive={shape.centerTop} />
                <PartCenterBottom
                    {...shapeProps}
                    isActive={shape.centerBottom}
                />
                <ObliquePart
                    {...shapeProps}
                    isActive={shape.obliqueTopLeft}
                    transform={`translate(${stroke + spacing / 2}, ${stroke +
                        spacing / 2})`}
                />
                <ObliquePart
                    {...shapeProps}
                    isActive={shape.obliqueTopRight}
                    transform={`translate(${width -
                        stroke -
                        spacing / 2}, ${stroke + spacing / 2}) scale(-1, 1)`}
                />
                <ObliquePart
                    {...shapeProps}
                    isActive={shape.obliqueBottomRight}
                    transform={`translate(${width / 2 +
                        stroke / 2 +
                        spacing / 2}, ${height / 2 +
                        stroke / 2 +
                        spacing / 2}) scale(-1) rotate(180)`}
                />
                <ObliquePart
                    {...shapeProps}
                    isActive={shape.obliqueBottomLeft}
                    transform={`translate(${width / 2 -
                        stroke / 2 -
                        spacing / 2}, ${height / 2 +
                        stroke / 2 +
                        spacing / 2}) scale(-1, 1)`}
                />
            </g>
        )
    }
}