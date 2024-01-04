const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer footer-center py-5'>
      <p>&copy; {currentYear} Reel Rover - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
