import './App.css'
import SearchBar from  './component/SearchBar'
import Card from  './component/Card'
import Warnings from  './component/Warnings'

function App() {
  return (
    <div className="container">
      <div className="itens">
        <SearchBar/>
        <Card/>
        <Warnings/>
      </div>
    </div>
  )
}

export default App