import axios from 'axios';

const $ = {
    __: false,
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
const c = console.log;
const color = '\x1b[35m%s\x1b[0m';

console.clear();
c('\x1b[36m%s\x1b[0m', '\n-- @axios.mjs');
axios.defaults.headers.common['X-Auth-Token'] = '<XATOKEN>';

if ($.__) axios.interceptors.request.use(
    config => {
        let { method, url } = config;
        method = method.toUpperCase();
        url = url.slice(8);
        c('\x1b[32m%s\x1b[0m', `\n~~ ${method} | ${url} | ${new Date().toJSON()}`);
        return config;
    },
    () => { },
);

await (async function () {
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        params: { _limit: 5 },
        headers: {
            Authorization: '<TOKEN>',
            'Content-Type': 'application/json',
        },
        data: {},
        timeout: 2000,
        transformResponse: axios.defaults.transformResponse.concat(data => {
            try { for (const e of data) e.address.zipcode = e.address.zipcode.slice(0, 5); }
            catch { }
            return data;
        }),
        validateStatus: status => status >= 200 && status < 300,
    };

    function error(err) {
        c(color, '\n-- AXIOS\n');
        if (!err.response) c('\x1b[31m%s\x1b[0m', '%% REQUEST ERROR');
        else if (err.response.status === 404) c('\x1b[31m%s\x1b[0m', err.response.status);
        else c('\x1b[31m%s\x1b[0m', '%% UNKNOWN ERROR');
    }

    if ($._0) await axios(options)
        .then(res => {
            c(color, '\n-- AXIOS\n');
            return res.data;
        })
        .then(data => c(parseFloat(data[data.length - 1].address.zipcode)))
        .catch(error);
}());

if ($._1) await axios.head('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        c(color, '\n-- HEAD\n');
        c(res.config.headers['User-Agent']);
    })
    .catch(() => { });

if ($._2) await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=1')
    .then(res => {
        c(color, '\n-- GET\n');
        c(res.data[0].title);
    })
    .catch(() => { });

if ($._3) await axios.post('https://jsonplaceholder.typicode.com/comments', {})
    .then(res => {
        c(color, '\n-- POST\n');
        c(res.data);
    })
    .catch(() => { });

if ($._4) await axios.put('https://jsonplaceholder.typicode.com/albums/2', {})
    .then(res => {
        c(color, '\n-- PUT\n');
        c(res.data);
    })
    .catch(() => { });

if ($._5) await axios.patch('https://jsonplaceholder.typicode.com/photos/3', { id: 10 })
    .then(res => {
        c(color, '\n-- PATCH\n');
        c(res.data.id);
    })
    .catch(() => { });

if ($._6) await axios.delete('https://jsonplaceholder.typicode.com/users/4')
    .then(res => {
        c(color, '\n-- DELETE\n');
        c(res.data);
    })
    .catch(() => { });

if ($._7) await axios.all(
    [
        axios('https://jsonplaceholder.typicode.com/todos/1'),
        axios('https://jsonplaceholder.typicode.com/todos/2'),
    ])
    .then(axios.spread((res1, res2) => {
        c(color, '\n-- ALL\n');
        c(`${res1.data.title}\n`);
        c(res2.data.title);
    }))
    .catch(() => { });

await (async function () {
    const instance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
    if ($._8) await instance('/comments/1')
        .then(res => {
            c(color, '\n-- CREATE\n');
            c(res.data.email);
        })
        .catch(() => { });
}());

await (async function () {
    const source = axios.CancelToken.source();
    const config = { cancelToken: source.token };
    source.cancel('\n%% CANCELLED');
    if ($._9) c(color, '\n-- CANCEL');
    if ($._9) await axios('https://jsonplaceholder.typicode.com/posts', config)
        .catch(err => { if (axios.isCancel(err)) c('\x1b[31m%s\x1b[0m', err.message); });
}());
