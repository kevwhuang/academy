import { users } from './users.mjs';

const get = (req, res) => res.json(users);

const getId = (req, res) => {
    const check = e => e.id === parseInt(req.params.id, 10);

    if (users.some(check)) res.json(users.filter(check));
    else return res.status(400).json({ error: `<id: ${req.params.id}> not found.` });
};

const post = (req, res) => {
    const newUser = {
        id: req.body.id || Object.keys(users).length,
        name: req.body.name,
        role: req.body.role || '',
        student: req.body.student || false,
    };
    const check = e => e.id === parseInt(newUser.id, 10);

    if (typeof newUser.id !== 'number') {
        return res.status(400).json({ error: '<id> must be a number.' });
    }
    if (users.some(check)) {
        return res.status(400).json({ error: `<id: ${newUser.id}> already exists.` });
    }
    if (!newUser.name) return res.status(400).json({ error: '<name> must be included.' });
    if (typeof newUser.name !== 'string') {
        return res.status(400).json({ error: '<name> must be a string.' });
    }
    if (typeof newUser.role !== 'string') {
        return res.status(400).json({ error: '<role> must be a string.' });
    }
    if (typeof newUser.student !== 'boolean') {
        return res.status(400).json({ error: '<student> must be a boolean.' });
    }

    users.push(newUser);
    users.sort((a, b) => a.id > b.id ? 1 : -1);
    res.json(newUser);
};

const put = (req, res) => {
    const pos = users.findIndex(e => e.id === parseInt(req.params.id, 10));
    let currentUser;

    if (pos === -1) return res.status(400).json({ error: `<id: ${req.params.id}> not found.` });

    currentUser = users[pos];
    currentUser.name = req.body.name;
    currentUser.role = req.body.role || '';
    currentUser.student = req.body.student || false;

    if (!currentUser.name) {
        return res.status(400).json({ error: '<name> must be included.' });
    }
    if (typeof currentUser.name !== 'string') {
        return res.status(400).json({ error: '<name> must be a string.' });
    }
    if (typeof currentUser.role !== 'string') {
        return res.status(400).json({ error: '<role> must be a string.' });
    }
    if (typeof currentUser.student !== 'boolean') {
        return res.status(400).json({ error: '<student> must be a boolean.' });
    }

    users.splice(pos, 1, currentUser);
    res.json(currentUser);
};

const patch = (req, res) => {
    const pos = users.findIndex(e => e.id === parseInt(req.params.id, 10));
    let currentUser;

    if (pos === -1) return res.status(400).json({ error: `<id: ${req.params.id}> not found.` });

    currentUser = users[pos];
    currentUser.name = req.body.name || currentUser.name;
    currentUser.role = req.body.role || currentUser.role;
    currentUser.student = req.body.student || currentUser.student;

    if (typeof currentUser.name !== 'string') {
        return res.status(400).json({ error: '<name> must be a string.' });
    }
    if (typeof currentUser.role !== 'string') {
        return res.status(400).json({ error: '<role> must be a string.' });
    }
    if (typeof currentUser.student !== 'boolean') {
        return res.status(400).json({ error: '<student> must be a boolean.' });
    }

    users.splice(pos, 1, currentUser);
    res.json(currentUser);
};

const remove = (req, res) => {
    const pos = users.findIndex(e => e.id === parseInt(req.params.id, 10));

    if (pos === -1) return res.status(400).json({ error: `<id: ${req.params.id}> not found.` });

    users.splice(pos, 1);
    res.json({ message: `<id: ${req.params.id}> deleted.` });
};

export default {
    get, getId, post, put, patch, remove,
};
