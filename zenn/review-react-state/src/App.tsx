import './App.css'
import { Gallery } from './components/Gallery'
import FakeImageItems from "./assets/fake.json" with { type: "json" }


function App() {
  return (
    <div className='app'>
      <h1>Image Gallery</h1>
      <Gallery rawImages={FakeImageItems.imageItems} />
    </div>
  )
}

export default App
