import React, {Component} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Chair Gray',
          img: 'chair-gray.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing.',
          category: 'chair',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing.',
          category: 'table',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing.',
          category: 'sofa',
          price: '299.99'
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'lamp.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing.',
          category: 'lamp',
          price: '19.99'
        },
        {
          id: 5,
          title: 'Chair White',
          img: 'chair-white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing.',
          category: 'chair',
          price: '59.99'
        },
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Items items={this.state.items}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
