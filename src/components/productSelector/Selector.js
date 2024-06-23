import React, { Component } from 'react';

class Selector extends Component {
    constructor(props) {
        super(props);
     
    }
    handleColorClick = (color) => {
        this.props.handleColorClick(color)
    }
    handleSizeClick = (size) => {
        this.props.handleSizeClick(size)
    }
    render() {
        const { activeSize, activeColor, attributes } = this.props;
        const sizeValues = sizes.map(s=>s.value);
        const colors = ['grey', 'green', 'black'];

        return (
            <div>
                <p>SIZE:</p>
                <div className="sizes">
                    {attributes?.map(attr => (
                        <div
                            key={attr}
                            className={`size ${activeSize === size ? 'active' : ''}`}
                            onClick={() => this.handleSizeClick(size)}
                        >
                            {size}
                        </div>
                    ))}
                </div>
                
                <p>COLOR:</p>
                <div className="colors">
                    {colors.map(color => (
                        <div
                            key={color}
                            className={`color ${activeColor === color ? 'active' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => this.handleColorClick(color)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Selector;
