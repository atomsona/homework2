
import './App.css'
import Card from './components/card/Card'
import Text from './components/card/Text';
import ProductCard from './components/card/ProductCard';
import Button from './components/card/Button'

function App() {
  

  return (
    <div className="app">
    <Text text="Welcome to the Store" fontSize="3rem" color="#333" textAlign="center" />

    <ProductCard
      name="Laptop"
      price={999$}
      quantity={10}
      description="A high-performance laptop with great features."
      color="#e0f7fa"
    />

    <Button text="Buy Now" backgroundColor="#28a745" width="200px" height="60px" />

    <Card name="Luka" age="13" />
    <Card name="Giorgi" age="15" />
    <Card name="Mariami" age="16" />
    <Card name="Nikolozi" age="14" />
  </div>
  )
}

export default App
