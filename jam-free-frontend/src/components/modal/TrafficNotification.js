import React from 'react'

const TrafficNotification = ({ modalOpen, openTrafficNotifcation, setOpenTrafficNotifcation }) => {
    return (
        <>{
            (openTrafficNotifcation && !modalOpen) &&
            (<div className='bg-white absolute top-10 left -10 '>
                <p onClick={() => setOpenTrafficNotifcation(false)} className='float-right'>X</p>
                <ul>
                    <p>There is heavy Traffic on these area (Try Alternate Routes):  </p>
                    <li>Koteshwor</li>
                    <li>Baneshwor</li>
                    <li>Gaushala</li>
                    <li>Kalanki</li>
                    <li>Maitighar</li>
                </ul>
            </div>)
        }
        </>
    )
}
export default TrafficNotification
