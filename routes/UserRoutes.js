import { Router } from 'express';
import { createUser, listUsers, retrieveUser, updateUser, deleteUser } from '../controllers/UserController.js';
import passport from 'passport';

const router = Router();

// Define the ensureAuthenticated function
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// User routes
router.post('/users', createUser);
router.get('/users', listUsers);
router.get('/users/:id', retrieveUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Login and Logout routes
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',  // redirect to some dashboard or main page on success
    failureRedirect: '/login',     // redirect back to login on failure
    failureFlash: true             // use flash messages for failures (requires connect-flash middleware)
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

// Protected Route
router.get('/some-protected-route', ensureAuthenticated, (req, res) => {
    // Handle the request, e.g., send a response or render a view
    res.send('This is a protected route, accessible only to authenticated users.');
});

export default router;
