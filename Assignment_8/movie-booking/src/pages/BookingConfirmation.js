import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./BookingConfirmation.css"; // For styling

const BookingConfirmation = () => {
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState(null);
    const [bookingId, setBookingId] = useState("");

    useEffect(() => {
        // Retrieve booking data from local storage
        const data = JSON.parse(localStorage.getItem("bookingData"));
        if (data) {
            setBookingData(data);
            setBookingId(uuidv4().slice(0, 8)); // Generate a short unique ID
        } else {
            navigate("/"); // Redirect if no data found
        }
    }, [navigate]);

    if (!bookingData) return <h2 > Loading... < /h2>;

    return ( <
        div className = "booking-confirmation" >
        <
        h2 > 🎉Booking Confirmed!🎉 < /h2> <
        p > < strong > Booking ID: < /strong> {bookingId}</p >
        <
        p > < strong > Name: < /strong> {bookingData.name}</p >
        <
        p > < strong > Email: < /strong> {bookingData.email}</p >
        <
        p > < strong > Mobile: < /strong> {bookingData.mobile}</p >
        <
        button onClick = {
            () => navigate("/") } > Go to Home < /button> <
        /div>
    );
};

export default BookingConfirmation;