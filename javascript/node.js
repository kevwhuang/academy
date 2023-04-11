const LOG = true;
const modules = 'assert|dgram|os|string_decoder|tls';
const [PURPLE, TEAL] = ['\x1b[35m%s\x1b[0m', '\x1b[36m%s\x1b[0m'];
const [c, C, O] = [console.log, console.table, function (output) { this.output = output; }];
const $ = (table, key, value) => eval(`$${table}['${key}'] = new O('${value}')`);
const node = table => LOG && setTimeout(() => { c(TEAL, table); C(eval(`$${table}`)); }, 0);

for (const e of modules.split('|')) { eval(`var ${e} = require('${e}'); var $${e} = {}`); }
c(PURPLE, '#'.repeat(29));
setTimeout(() => c(PURPLE, '#'.repeat(29)), 10);

node('assert');
$('assert', 'deepStrictEqual()', '', assert.strict.deepStrictEqual([{ 0: [0] }], [{ 0: [0] }]));
$('assert', 'doesNotMatch()', '', assert.strict.doesNotMatch('1', /2/));
$('assert', 'ifError()', '', assert.strict.ifError(undefined));
$('assert', 'match()', '', assert.strict.match('1', /1/));
$('assert', 'notDeepStrictEqual()', '', assert.strict.notDeepStrictEqual([{ 0: [0] }], [{ 0: ['0'] }]));
$('assert', 'ok()', '', assert.strict.ok(!!1));
$('assert', 'throws()', '', assert.strict.throws(() => { throw Error; }));

node('dgram');
$('dgram', 'createSocket()', dgram.createSocket('udp4').bind(9999, 'localhost').type);

node('os');
$('os', 'cpus()', os.cpus()[0].model.slice(os.cpus()[0].model.indexOf(' i') + 1));
$('os', 'freemem()', `${parseInt(os.freemem() * 1e-6)} MB`);
$('os', 'machine()', os.machine());
$('os', 'release()', os.release());
$('os', 'totalmem()', `${parseInt(os.totalmem() * 1e-6)} MB`);
$('os', 'type()', os.type());
$('os', 'userInfo()', os.userInfo().username);

node('string_decoder');
$('string_decoder', 'write()', (new string_decoder.StringDecoder).write(Buffer.from('æ')));

node('tls');
