## Instructor Attendance System
# Description
This project is an instructor attendance system that allows institutes to track their instructors' check-in and check-out times throughout the day and view their total working hours on a monthly basis. It provides APIs to store check-in/out information into the database and generate aggregated monthly reports.

## Installation
1. Clone the repository to your local machine:
    git clone <repository_url>

2. Navigate to the project directory:
    cd attendance-system

3. Install dependencies:
    npm install

4. Start the server:
    npm start

5. Access the APIs using tools like Postman or through a web browser:
   
        Check-in: POST /api/checkin
        Check-out: POST /api/checkout
        Monthly report: GET /api/reports/:year/:month

## Technologies Used
    Node.js
    Express.js
    MongoDB

## License
This project is licensed under the ISC License.
