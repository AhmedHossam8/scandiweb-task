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
    handleAttributeClick = (attr, item) => {
        const attributes = [...this.props.attributes].map(a => {
            if (a.id === attr.id) {
                return {
                    ...a,
                    items: a.items.map(i => ({
                        ...i,
                        selected: i.id === item.id
                    }))
                };
            }
            return a;
        });
        this.props.handleAttributeClick(attributes);
    }
    render() {
        const { activeSize, activeColor, attributes } = this.props;
        const sizes = ["XL", "L", "M"];
        const colors = ['grey', 'green', 'black'];

        return (
            <div>
                <div className="">
                    {attributes?.map(attr => (
                        <div
                            key={attr.id}
                            className={`sizes`}
                        >
                            {
                                attr.type === "text" ? <div>
                                    <div className="mb-2">{attr.name}</div>
                                    <div className='sizes'>
                                        {attr.items.map(item => {
                                            return <div className={`size ${item.selected? "active" : ""}`} onClick={()=>this.handleAttributeClick(attr, item)}>{item.value}</div>
                                        })}
                                    </div>
                                </div> :
                                    attr.type === "swatch" ? <div>
                                            <div className="mb-2">{attr.name}</div>
                                            <div className="colors d-block">
                                                {attr.items.map(color => (
                                                    <div
                                                        key={color.id}
                                                        className={`color ${color.selected ? 'active' : ''}`}
                                                        style={{ backgroundColor: color.value }}
                                                        onClick={()=>this.handleAttributeClick(attr, color)}
                                                    />
                                                ))}
                                            </div>
                                        </div> : <></>
                            }
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Selector;
