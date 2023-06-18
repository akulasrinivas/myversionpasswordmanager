const PasswordList = props => {
  const {passwordDetails} = props
  const {website, username, password} = passwordDetails

  const i = username[0]

  return (
    <li className="list-items">
      <p>{i}</p>
      <div>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          <p>{password}</p>
        </div>
        <buttn>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </buttn>
      </div>
    </li>
  )
}
export default PasswordList
