import React from 'react'

interface Props {}

function Header(props: Props) {
  const {} = props

  return (
    <header>
    <div>
        <div className="img-container">
            <h1 className="logo">Vampire the Masquerade</h1>
            {/* <img class="logo" src="./resources/images/logo white.png"> */}
        </div>
    </div>
</header>
  )
}

export default Header
