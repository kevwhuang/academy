const exists = (res, field, id) => res.status(400).json({ error: `<${field}: ${id}> already exists.` });
const format = (res, field) => res.status(400).json({ error: `<${field}> must be correctly formatted.` });
const minimum = (res, field, value) => res.status(400).json({ error: `<${field}> must be at least ${value} characters.` });
const missing = (res, field) => res.status(400).json({ error: `<${field}> must be included.` });
const type = (res, field, type) => res.status(400).json({ error: `<${field}> must be a ${type}.` });
const unknown = (res, field, id) => res.status(400).json({ error: `<${field}: ${id}> not found.` });

export default {
    exists,
    format,
    minimum,
    missing,
    type,
    unknown,
};
