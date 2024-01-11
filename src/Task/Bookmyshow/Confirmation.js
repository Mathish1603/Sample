import React from 'react'

export default function Confirmation() {
  return (
    <div>
        <div class="container">
            <div class="bg-success"><h1 class="text-light p-5 text-center">Booking Confirmed <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRb7PNN_tgDxb0QadD8ABb-WGLFCH45ZCmiw&usqp=CAU" width="40px"/></h1></div>
            <div>
                <div class="row">
                    <div class="col-4">
                        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chandramukhi-2-et00341436-1695724082.jpg" width="200px"/>
                    </div>
                    <div class="col-4">
                         <h3>Chandramukhi 2</h3>
                         <p class="text-light bg-secondary col-6 text-center">U/A</p><p class="text-light bg-secondary col-6 text-center">TAMIL</p><p class="text-light bg-secondary col-6 text-center">2HR 30MIN</p><p class="text-light bg-secondary col-6 text-center">2D</p>
                         <h4 class="text-light bg-secondary col-6 text-center">11:15AM</h4>
                         <h4 class="text-light bg-secondary col-6 text-center">Screen 1</h4>
                    </div>
                    <div class="col-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fQCiU-9BwP58HjMPLVbjv6Tp0Z1J1DAiIw&usqp=CAU" width="300px"/>
                    </div>
                </div>
            </div><br></br>
            <div class="bg-success"><a href="/bookmyshow" class="text-decoration-none text-light"><h4 class="text-light text-center p-5">Back</h4></a></div>

        </div>
    </div>
  )
}
