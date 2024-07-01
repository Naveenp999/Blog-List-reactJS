import './index.css'
export const UserInfo = () => {
  return (
    <div className="username-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="user-icon"
      />
      <h1 className="name-text">Wade Warren</h1>
      <p className="designation">Software developer at UK</p>
    </div>
  )
}
