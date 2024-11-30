import React from "react";
import roomscss from "./../rooms/room.module.css";
function Rooms() {
  return (
    <div className={`${roomscss.rooms_container} section`}>
      <small className="section_rooms">Luxury Suites</small>
      <h2 className="section_room_title">
        Our Best<span>Rooms</span>
      </h2>

      <div className={roomscss.cards}>
        <div className={roomscss.card_container}>
          <div className={roomscss.card}>
            <div className={roomscss.card_front}>
              <button>Juniour Suite</button>
            </div>

            <div className={roomscss.card_Back}>
              <div className={roomscss.price}>
                <p>$120/N</p>
              </div>

              <div className={roomscss.card_content}>
                <h3>Juniour Suite</h3>
                <p>- Daily Clening</p>
                <p>- Home Services</p>
                <p>- HouseKeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomscss.BookNow}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rooms;
