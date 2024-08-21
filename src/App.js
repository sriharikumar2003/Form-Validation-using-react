import React, { useState } from 'react';
import "./App.css"

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    team: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Enter first Name';
    if (!formData.lastName) newErrors.lastName = 'Enter Last Name';
    if (!formData.birthDate) newErrors.birthDate = 'Enter Birth Date';
    if (!formData.email) newErrors.email = 'Enter E-mail';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Enter phone no';
    if (!formData.gender) newErrors.gender = 'Gender is empty';
    if (!formData.startTime) newErrors.startTime = 'Enter Start time';
    if (!formData.endTime) newErrors.endTime = 'Enter End time';
    if (!formData.jobPosition) newErrors.jobPosition = 'Select position';
    if (!formData.billableHours) {
      newErrors.billableHours = 'Billable Hours is required';
    } else if (isNaN(formData.billableHours) || formData.billableHours <= 0) {
      newErrors.billableHours = 'Billable Hours must be a positive number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>Employee Form</h1>
      <div className='main'>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={{ borderColor: errors.firstName ? 'red' : '' }}
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>

      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={{ borderColor: errors.lastName ? 'red' : '' }}
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>

      <div>
        <label>Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          style={{ borderColor: errors.birthDate ? 'red' : '' }}
        />
        {errors.birthDate && <p style={{ color: 'red' }}>{errors.birthDate}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ borderColor: errors.email ? 'red' : '' }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          style={{ borderColor: errors.phoneNumber ? 'red' : '' }}
        />
        {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>Select Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={{ borderColor: errors.gender ? 'red' : '' }}
        >
          <option value="">Choose Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
      </div>
      <div>
        <label>Start Time</label><br></br>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          style={{ borderColor: errors.startTime ? 'red' : '' }}
        />
        {errors.startTime && <p style={{ color: 'red' }}>{errors.startTime}</p>}
      </div>
      <div>
        <label>End Time</label><br></br>
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          style={{ borderColor: errors.endTime ? 'red' : '' }}
        />
        {errors.endTime && <p style={{ color: 'red' }}>{errors.endTime}</p>}
      </div>
      <div>
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
          style={{ borderColor: errors.jobPosition ? 'red' : '' }}
        />
        {errors.jobPosition && <p style={{ color: 'red' }}>{errors.jobPosition}</p>}
      </div>
      <div>
        <label>Select Teams</label><br></br>
        <select name="team" value={formData.team} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
        </select>
      </div>
      <div>
        <label>Select Designation</label>
        <select name="designation" value={formData.designation} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      <div>
        <label>Billable Hours</label>
        <input
          type="number"
          name="billableHours"
          value={formData.billableHours}
          onChange={handleChange}
          style={{ borderColor: errors.billableHours ? 'red' : '' }}
        />
        {errors.billableHours && <p style={{ color: 'red' }}>{errors.billableHours}</p>}
      </div>
      <div>
        <label>Is Billable</label>
        <input
          type="checkbox"
          name="isBillable"
          checked={formData.isBillable}
          onChange={handleChange}
        />
      </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;