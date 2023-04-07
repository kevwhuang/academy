import errors from './errors.mjs';
import users from './data/users.mjs';

const get = (req, res) => res.json(users);

const getId = (req, res) => {
    const check = e => e.id === parseInt(req.params.id, 10);

    if (users.some(check)) res.json(users.filter(check));
    else return errors.unknown(res, 'id', req.params.id);
};

const post = (req, res) => {
    const newUser = {
        id: req.body.id || Object.keys(users).length,
        name: req.body.name,
        role: req.body.role || '',
        student: req.body.student || false,
    };
    const check = e => e.id === parseInt(newUser.id, 10);

    if (typeof newUser.id !== 'number') return errors.type(res, 'id', 'number');
    if (users.some(check)) return errors.exists(res, 'id', newUser.id);
    if (!newUser.name) return errors.missing(res, 'name');
    if (typeof newUser.name !== 'string') return errors.type(res, 'name', 'string');
    if (typeof newUser.role !== 'string') return errors.type(res, 'role', 'string');
    if (typeof newUser.student !== 'boolean') return errors.type(res, 'student', 'boolean');

    users.push(newUser);
    users.sort((a, b) => a.id > b.id ? 1 : -1);
    res.status(201).json(newUser);
};

const put = (req, res) => {
    const pos = users.findIndex(e => e.id === parseInt(req.params.id, 10));
    let currentUser;

    if (pos === -1) return errors.unknown(res, 'id', req.params.id);

    currentUser = users[pos];
    currentUser.name = req.body.name;
    currentUser.role = req.body.role || '';
    currentUser.student = req.body.student || false;

    if (!currentUser.name) return errors.missing(res, 'name');
    if (typeof currentUser.name !== 'string') return errors.type(res, 'name', 'string');
    if (typeof currentUser.role !== 'string') return errors.type(res, 'role', 'string');
    if (typeof currentUser.student !== 'boolean') return errors.type(res, 'student', 'boolean');

    users.splice(pos, 1, currentUser);
    res.status(204).json(currentUser);
};

const patch = (req, res) => {
    const pos = users.findIndex(e => e.id === parseInt(req.params.id, 10));
    let currentUser;

    if (pos === -1) return errors.unknown(res, 'id', req.params.id);

    currentUser = users[pos];
    currentUser.name = req.body.name || currentUser.name;
    currentUser.role = req.body.role || currentUser.role;
    currentUser.student = req.body.student || currentUser.student;

    if (typeof currentUser.name !== 'string') return errors.type(res, 'name', 'string');
    if (typeof currentUser.role !== 'string') return errors.type(res, 'role', 'string');
    if (typeof currentUser.student !== 'boolean') return errors.type(res, 'student', 'boolean');

    users.splice(pos, 1, currentUser);
    res.status(204).json(currentUser);
};

const remove = (req, res) => {
    const pos = users.findIndex(e => e.id === parseInt(req.params.id, 10));

    if (pos === -1) return errors.unknown(res, 'id', req.params.id);

    users.splice(pos, 1);
    res.status(204).json({ message: `<id: ${req.params.id}> deleted.` });
};

export default {
    get,
    getId,
    post,
    put,
    patch,
    remove,
};
