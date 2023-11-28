function Header(props) {
  return (
    <header>
      <h1 className={props.spin ? 'header-spin' : ''} onClick={props.onSpinClick}>
        {props.heading}
      </h1>
    </header>
  )
}

export default Header;