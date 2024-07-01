import './index.css'
export const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <li className="content-item">
      <div className="horizantal">
        <h1 className="tit">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="des">{description}</p>
      <hr className="dash" />
    </li>
  )
}
