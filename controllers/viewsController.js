const Tour = require('../models/tourModel');
const Review = require('../models/reviewModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async(req, res, next) => {
    const tours = await Tour.find();

    res.status(200).render('overview', {
        title: 'All Tours',
        tours
    });
})

exports.getTour = catchAsync(async(req, res, next) => {
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
    });

    // if (!tour) {
    //     return next(new AppError('There is no tour with that name', 404));
    // }

    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour
    });
})

exports.getLogin = catchAsync(async(req, res, next) => {
    res.status(200).render('login', {
        title: `Login into your account`
    });
});

exports.getSignup = catchAsync(async(req, res, next) => {
    res.status(200).render('signup', {
        title: `Sign Up now`
    });
});

exports.getAccount = (req, res) => {
    res.status(200).render('account', {
        title: `Your account`
    });
}

exports.getMyTours = catchAsync(async(req, res, next) => {
    // find all bookings
    const bookings = await Booking.find({ user: req.user.id });

    // find tours with the returned ID's
    const tourIDs = bookings.map(el => el.tour);
    const tours = await Tour.find({ _id: { $in: tourIDs } });

    res.status(200).render('overview', {
        title: 'My Tours',
        tours
    });
});

exports.getMyReviews = catchAsync(async(req, res, next) => {
    // find all
    const reviews = await Review.find({ user: req.user.id }).populate({
        path: 'tour',
        select: 'name'
    });

    res.status(200).render('reviews', {
        title: 'My Reviews',
        reviews
    });
});


exports.updateUserData = catchAsync(async(req, res) => {
    const { name, email } = req.body;

    const updateUser = await User.findByIdAndUpdate(req.user.id, { name, email }, { new: true, runValidators: true });

    res.status(200).render('account', {
        title: 'Your account',
        status: 'success',
        user: updateUser
    });
});