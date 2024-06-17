# Appointment Booking System API

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SegunCodes/appointment-booking-system.git
   cd appointment-booking-system

2. Install dependencies:
   ```bash
   npm install

3. Start application:
   ```bash
   npm start


# API ENDPOINTS

## User Authentication
POST /auth/register - Register a new user.
Request body: { "name": "John Doe", "email": "john@example.com", "password": "password123", "role": "customer" }

POST /auth/login - Login a user.
Request body: { "email": "john@example.com", "password": "password123" }

## Merchant Management
POST /merchant/schedule - Create a merchant schedule.
Headers: { "Authorization": "Bearer <token>" }
Request body: { "name": "Merchant Name", "email": "merchant@example.com", "schedule": [{ "day": "Monday", "timeSlots": ["09:00", "10:00"] }] }

GET /merchants - Get a list of all merchants.
Headers: { "Authorization": "Bearer <token>" }

## Customer Booking
POST /bookings/create - Book an appointment.
Headers: { "Authorization": "Bearer <token>" }
Request body: { "merchantId": "merchantId", "date": "2023-12-12", "timeSlot": "10:00" }

GET /bookings - Get a list of all bookings for the logged-in customer.
Headers: { "Authorization": "Bearer <token>" }

## Appointment Management
GET /merchants/:id/bookings - Get a list of all bookings for a merchant.
Headers: { "Authorization": "Bearer <token>" }

PATCH /bookings/:id - Update a booking (date, timeSlot, status).
Headers: { "Authorization": "Bearer <token>" }

DELETE /bookings/:id - Delete a booking.
Headers: { "Authorization": "Bearer <token>" }
