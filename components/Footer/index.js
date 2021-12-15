export const footerHeight = 90

const Footer = () => (
  <footer
    className="flex items-center justify-center w-full border-t"
    style={{ height: `${footerHeight}px` }}
  >
    <p className="flex items-center justify-center">Made by Łukasz Komar | Copyright © 2021</p>
  </footer>
)

export default Footer
