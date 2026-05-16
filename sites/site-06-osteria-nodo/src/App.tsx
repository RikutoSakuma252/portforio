import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Wine from './components/Wine'
import Space from './components/Space'
import Voice from './components/Voice'
import Reserve from './components/Reserve'
import Access from './components/Access'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Wine />
        <Space />
        <Voice />
        <Reserve />
        <Access />
      </main>
      <Footer />
    </>
  )
}
