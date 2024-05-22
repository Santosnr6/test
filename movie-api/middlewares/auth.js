const authenticate = (req, res, next) => {
    if (global.currentUser) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

export default authenticate;