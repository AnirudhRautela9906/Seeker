import React, { useState } from 'react';
import './jobForm.scss'; // Assuming CSS is in a separate file

const MyFormOverlay = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleOpenForm = () => {
        setIsFormVisible(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here

        // Hide the form after submission
        setIsFormVisible(false);
    };

    return (
        <div className={`page-container ${isFormVisible ? 'blur' : ''}`}>
            <button onClick={handleOpenForm}>Open Form</button>

            {isFormVisible && (
                <div className="overlay">
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input type="text" name="name" required />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyFormOverlay;
