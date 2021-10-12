import QRCode from "react-qr-code";

const GatheringQR = ({ gatheringId }) => {
  const gatheringURL = `${window.location.origin}/${gatheringId}`

  return (
    <div>
      <div>{gatheringURL}</div>
      <QRCode value={gatheringURL} className='mb-3'/>
    </div>
  )
}

export default GatheringQR