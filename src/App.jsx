import { accordionData } from "./utility/content";
import Accordion from './components/Accordion'

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-gray-800 text-white">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  )
}

export default App
