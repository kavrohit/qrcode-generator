import { useState } from 'react'
import QRCode from 'qrcode'
const HomePage = () => {
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState(null)

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const generateQRCode = async (url) => {
    try {
      const qrCode = await QRCode.toDataURL(url)
      return qrCode
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const generateCode = async () => {
    const code = await generateQRCode(url)
    setQrCode(code)
  }

  return (
    <div>
      <input type="text" value={url} onChange={handleUrlChange} />
      <button onClick={generateCode}>Generate QR Code</button>
      {qrCode && <img src={qrCode} alt="QR code" />}
    </div>
  )
}

export default HomePage
