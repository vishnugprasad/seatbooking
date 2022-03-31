import "./Seatbookin.css";
import Calendar from "./Calendar";
import { useState } from "react";

const Seatbookin = () => {
  const [date, setDate] = useState("");
  var dcount = date.toString().split(" ");

  return (
    <div className="bookingContainer">
      <Calendar date={date} setDate={setDate}></Calendar>

      <div className="BookingScreen">
        <div className="cubicle">
          <button className="seat"></button>
          
          <button className="seat"></button>
         
          <button className="seat"></button>
          
          <button className="seat"></button>
          
        </div>

        <div className="cubicle">
          <button className="seat"></button>
         
          <button className="seat"></button>
          
          <button className="seat"></button>
         
          <button className="seat"></button>
          
        </div>

        <div className="cubicle">
          <button className="seat"></button>
         
          <button className="seat"></button>
         
          <button className="seat"></button>
         
          <button className="seat"></button>
        
        </div>
        <div className="cubicle">
          <button className="seat"></button>
          
          <button className="seat"></button>
         
          <button className="seat"></button>
          
          <button className="seat"></button>
          
        </div>
        <div className="cubicle">
          <button className="seat"></button>
          
          <button className="seat"></button>
          
          <button className="seat"></button>
         
          <button className="seat"></button>
         
        </div>

        <div className="cubicle">
          <button className="seat"></button>
          
          <button className="seat"></button>
          
          <button className="seat"></button>
          
          <button className="seat"></button>
          
        </div>

        <div className="cubicle">
          <button className="seat"></button>
          
          <button className="seat"></button>
         
          <button className="seat"></button>
          
          <button className="seat"></button>
          
        </div>

        <div className="cubicle">
          <button className="seat"></button>
          
          <button className="seat"></button>
          
          <button className="seat"></button>
          
          <button className="seat"></button>
         
        </div>
      </div>

      <div className=" containerTwo">
        <div className="instructionBox">
          <div className="booked">booked</div>
          <div className="available">available</div>
          <div className="selected">selected</div>
        </div>
        <div className="dateSelection">
          {date !== ""
            ? `${dcount[0]} ${dcount[1]} ${dcount[2]} ${dcount[3]}`
            : null}
          {/* // when string and variable needed to be printed together "$" "``" is used */}
        </div>
        <button className="bookButton">Book Seat</button>
      </div>
    </div>
  );
};

export default Seatbookin;
