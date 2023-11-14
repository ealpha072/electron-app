import getAllFilesInFolder from "./utilities"

const App = () => {
  const path = './backend'

  getAllFilesInFolder(path).then(response => console.log(response))
  .catch(err => console.log(err))
  
  return (
    <div className='container'>
      <div className='left'>
        <ul className='titles'>
          <li>This is a test</li>
          <li>This is a test</li>
          <li>This is a test</li>
          <li>This is a test</li>
        </ul>
      </div>
      <div className='right'>
        <p>Select File to  start</p>
      </div>
    </div>
  )
}

export default App
