# ToursPH Application

This is a Tour Web Application built using Node.js, Express.js, Pug for templating, and MongoDB for the database.

## Features

- User authentication and authorization
- CRUD operations for tours
- Booking management
- User profile management
- Dynamic Pug templates for server-side rendering
- Responsive design

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating Engine**: Pug
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Other**: dotenv for environment variables, multer for file uploads, and more

## Prerequisites

- Node.js (v14.x or later)
- MongoDB (v4.x or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tour-web-app.git
   cd tour-web-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables to the `.env` file:
     ```plaintext
     NODE_ENV=development
     PORT=3000
     DATABASE=mongodb://localhost:27017/tour-web-app
     DATABASE_PASSWORD=yourpassword
     JWT_SECRET=your_jwt_secret
     JWT_EXPIRES_IN=90d
     ```

4. Start the application:
   ```bash
   npm start
   ```

## Usage

### Running in Development Mode

To run the application in development mode with nodemon, use:
```bash
npm run dev
```

### API Endpoints

The following API endpoints are available:

#### Auth
- `POST /api/v1/users/signup` - User signup
- `POST /api/v1/users/login` - User login
- `GET /api/v1/users/logout` - User logout

#### Tours
- `GET /api/v1/tours` - Get all tours
- `GET /api/v1/tours/:id` - Get a tour by ID
- `POST /api/v1/tours` - Create a new tour
- `PATCH /api/v1/tours/:id` - Update a tour by ID
- `DELETE /api/v1/tours/:id` - Delete a tour by ID

#### Bookings
- `GET /api/v1/bookings` - Get all bookings
- `GET /api/v1/bookings/:id` - Get a booking by ID
- `POST /api/v1/bookings` - Create a new booking
- `PATCH /api/v1/bookings/:id` - Update a booking by ID
- `DELETE /api/v1/bookings/:id` - Delete a booking by ID

### Pug Templating

The application uses Pug for server-side rendering of the following views:
- Home
- Tour details
- User profile
- Booking confirmation
- Error pages

## Project Structure

```plaintext
tour-web-app/
├── controllers/
│   ├── authController.js
│   ├── bookingController.js
│   ├── tourController.js
│   └── userController.js
├── models/
│   ├── bookingModel.js
│   ├── tourModel.js
│   └── userModel.js
├── public/
│   ├── css/
│   ├── img/
│   └── js/
├── routes/
│   ├── bookingRoutes.js
│   ├── tourRoutes.js
│   └── userRoutes.js
├── views/
│   ├── base.pug
│   ├── tour.pug
│   ├── user.pug
│   └── error.pug
├── .env
├── app.js
├── package.json
└── server.js
```

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [your email].

```

Feel free to customize this README file further to suit your project's needs.
