const adminAuth = (req, res, next) => {
    const token = 'xyz';
    const isAdminAuthorize = token === 'xyz';
    if (!isAdminAuthorize) {
        res.status(401).send('unauthorize request');
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = 'xyz11';
    const isUserAuthorize = token === 'xyz';
    if (!isUserAuthorize) {
        res.status(401).send('unauthorize request');
    } else {
        next();
    }
}

module.exports = { adminAuth, userAuth }