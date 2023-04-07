import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';

import accounts from './data/accounts.mjs';
import errors from './errors.mjs';

const auth = express.Router();

auth.post('/register', asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const formatName = /^[A-z ]+$/;
    const formatEmail = /^[A-z0-9._\-]+@[A-z0-9\-]+\.[A-z]+$/;
    const formatPassword = /.{6,}/;

    if (!name) return errors.missing(res, 'name');
    if (!email) return errors.missing(res, 'email');
    if (!password) return errors.missing(res, 'password');

    for (const e of accounts) {
        if (e.email === email) return errors.exists(res, 'email', email);
    }

    if (!formatName.test(name)) return errors.format(res, 'name');
    if (!formatEmail.test(email)) return errors.format(res, 'email');
    if (!formatPassword.test(password)) return errors.minimum(res, 'password', 6);

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));

    accounts.push({ name, email, password: hash });
    res.status(201).send('You are now registered!');
}));

auth.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let user;

    if (!email) return errors.missing(res, 'email');
    if (!password) return errors.missing(res, 'password');

    for (const e of accounts) if (e.email === email) user = e;
    if (!user) return errors.unknown(res, 'email', email);

    if (!await bcrypt.compare(password, user.password)) {
        res.status(401).send('Invalid password!');
    } else res.status(303).send('You are now logged in!');
}));

export default auth;
