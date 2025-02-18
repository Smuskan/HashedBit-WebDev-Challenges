import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookingForm.css"; // For styling

const BookingForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save booking data in local storage (optional)
        localStorage.setItem("bookingData", JSON.stringify({...formData, movieId: id }));

        // Navigate to confirmation page
        navigate("/confirmation");
    };

    return ( <
        div className = "booking-form" >
        <
        h2 > Book Your Seat < /h2> <
        form onSubmit = { handleSubmit } >
        <
        label > Name: < /label> <
        input type = "text"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        required / >

        <
        label > Email: < /label> <
        input type = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        required / >

        <
        label > Mobile: < /label> <
        input type = "tel"
        name = "mobile"
        value = { formData.mobile }
        onChange = { handleChange }
        required / >

        <
        button type = "submit" > Submit < /button> <
        /form> <
        /div>
    );
};

export default BookingForm;