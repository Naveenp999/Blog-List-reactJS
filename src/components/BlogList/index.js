import {BlogItem} from '../BlogItem'

import './index.css'
export const BlogList = props => {
  const {list} = props
  return (
    <ul className="list-con">
      {list.map(element => (
        <BlogItem key={element.id} item={element} />
      ))}
    </ul>
  )
}
