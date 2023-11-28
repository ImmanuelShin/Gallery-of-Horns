function Footer(props) {
  return (
    <h2 className={props.spin ? 'footer-spin' : ''} onClick={props.onSpinClick}>
      Made by {props.name}
    </h2>
  )
}

export default Footer;