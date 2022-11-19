const express = require('express');
const authRoute = require('./authRoute');
const careerPathRoute = require('./careerPathRoute');
const taskRoute = require('./taskRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/careerPaths',
        route: careerPathRoute,
    },
    {
        path: '/tasks',
        route: taskRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
