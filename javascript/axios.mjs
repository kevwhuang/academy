import axios from 'axios';

const $ = {
    _$: false,
    __: true,
    _0: true,
    _1: true,
    _2: true,
    _3: true,
    _4: true,
    _5: true,
    _6: true,
    _7: true,
    _8: true,
    _9: true,
};

const PURPLE = '\x1b[35m%s\x1b[0m';
const RED = '\x1b[31m%s\x1b[0m';
const c = console.log;
const e = () => { };

const configInstance = {
    timeout: 2000,
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'X-Custom-Header': 'test',
    },
};

const configReqUrlEncoded = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};

const options = {
    timeout: 2000,
    method: 'GET',
    url: '/users',
    data: {},
    headers: {
        Authorization: process.env.SECRET || '<TOKEN>',
        'Content-Type': 'application/json',
    },
    params: { _limit: 10 },
    transformResponse: axios.defaults.transformResponse.concat(data => {
        try {
            for (const x of data) x.address.zipcode = x.address.zipcode.slice(0, 5);
        } catch { }
        return data;
    }),
    validateStatus: status => status >= 200 && status < 300,
};

const interceptor = axios.interceptors.request.use(req => {
    const method = req.method.toUpperCase();
    const url = req.url.startsWith('http') ? req.url.slice(6) : req.url;

    c('\x1b[32m%s\x1b[0m', `\n~~ ${method} | ${url} | ${new Date().toJSON()}`);
    return req;
}, e);

console.clear();
c('\x1b[36m%s\x1b[0m', '\n---- @axios.mjs');

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Auth-Token'] = process.env.SECRET || '<XATOKEN>';

if (!$._$) axios.interceptors.request.eject(interceptor);

if ($.__) try {
    const data = await Promise.all([
        print('getUsers'),
        getUsers(),
        print('getUsersSingle'),
        getUsersSingle(4),
        getUsersSingle(10),
        print('postUsers'),
        postUsers({ id: 10 }),
        postUsers({ id: 10 }, configReqUrlEncoded),
        postUsers({ id: 1, name: 'Luna' }),
        postUsers({ id: '1', name: 'Luna' }),
        postUsers({ id: 10, name: 'Luna', role: 'Substitute', student: true }),
    ]);

    for (const x of data) typeof x === 'string' ? c(x) : c(x[0] || x);
} catch { }

if ($._0) await axios(options)
    .then(res => {
        c(PURPLE, '\n-- AXIOS\n');
        return res.data;
    })
    .then(data => c((data.at(-1).address.geo)))
    .catch(error);

if ($._1) await axios.head('/posts')
    .then(res => {
        c(PURPLE, '\n-- HEAD\n');
        c(res.config.headers['User-Agent']);
    })
    .catch(e);

if ($._2) await axios.get('/todos?_limit=1')
    .then(res => {
        c(PURPLE, '\n-- GET\n');
        c(res.data[0]);
    })
    .catch(e);

if ($._3) await axios.post('/comments', {})
    .then(res => {
        c(PURPLE, '\n-- POST\n');
        c(res.data);
    })
    .catch(e);

if ($._4) await axios.put('/albums/2', { title: 'Title' })
    .then(res => {
        c(PURPLE, '\n-- PUT\n');
        c(res.data);
    })
    .catch(e);

if ($._5) await axios.patch('/photos/3', { id: 10 })
    .then(res => {
        c(PURPLE, '\n-- PATCH\n');
        c({ id: res.data.id, title: res.data.title });
    })
    .catch(e);

if ($._6) await axios.delete('/users/4')
    .then(res => {
        c(PURPLE, '\n-- DELETE\n');
        c(res.data);
    })
    .catch(e);

if ($._7) await axios.all(
    [
        axios('/todos/1'),
        axios('/todos/2'),
    ])
    .then(axios.spread((...res) => {
        c(PURPLE, '\n-- ALL\n');
        c({ title: res[0].data.title });
        c({ title: res[1].data.title });
    }))
    .catch(e);

if ($._8) await axios.create(configInstance)('/comments/1')
    .then(res => {
        c(PURPLE, '\n-- CREATE\n');
        c({ name: res.data.name, email: res.data.email });
    })
    .catch(e);

if ($._9) (async function () {
    const terminate = new AbortController();

    try {
        terminate.abort();
        await axios();
        await axios('/posts', { signal: terminate.signal });
    } catch (err) {
        if (axios.isCancel(err)) {
            c(PURPLE, '\n-- CANCEL\n');
            c(RED, err.message);
        }
    }
}());

function error(err) {
    c(PURPLE, '\n-- AXIOS\n');
    if (!err.response) c(RED, '%% REQUEST ERROR');
    else if (err.response.status === 404) c(RED, `%% ${err.response.status}`);
    else c(RED, '%% UNKNOWN ERROR');
}

function getUsers() {
    return axios('http://localhost:65535/api/users')
        .then(res => res.data)
        .catch(err => err.response.data);
}

function getUsersSingle(id = 0) {
    return axios.get(`http://localhost:65535/api/users/${id}`)
        .then(res => res.data)
        .catch(err => err.response.data);
}

function postUsers(body, config) {
    return axios.post('http://localhost:65535/api/users', body, config)
        .then(res => res.data)
        .catch(err => err.response.data);
}

function print(text) {
    return new Promise(res => res(`\n\x1b[35m-- ${text}()\x1b[0m\n`));
}
