import qrImg from '../assets/image-qr-code.png'

export function QRCode() {
    return(
        <div className='card'>
            <div className='media'>
                <img src={qrImg}/>
            </div>
            <div className='content'>
                <h2>
                    Improve your front-end skills by building projects  
                </h2>
                <p>
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    )
}