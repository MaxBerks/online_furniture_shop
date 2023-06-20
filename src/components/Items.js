import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(item => (
                    <Item key={item.id} item={item}/>
                ))}
            </main>
        )
    }
}

export default Items