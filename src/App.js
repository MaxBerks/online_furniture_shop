import React, {Component} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'light',
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
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder}/>}
        <Footer/>
      </div>
    )
  } 

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })

    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
