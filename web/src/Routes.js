import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" prerender />
      {/* <Route path="/qrcode/{id:Int}" page={QrCodePage} name="qrCode" /> */}
    </Router>
  )
}

export default Routes
