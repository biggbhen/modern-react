import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
 const [text, setText] = useState('')
 const handleTextChange = (e) =>{
  setText(e.target.value)
 }
  return (
    <Card>
     <form>
      <h2>How would you rate our services?</h2>
      <div className="input-group">
       <input type="text" placeholder='Write a review' value={text} onChange={handleTextChange}/>
       <Button type='submit'>Send</Button>
      </div>
     </form>
    </Card>
  )
}

export default FeedbackForm