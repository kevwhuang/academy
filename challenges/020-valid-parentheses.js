function isValid(s) {
    while (1) {
        const $ = s.length;
        if (!$) return true;
        s = s.replaceAll(/\(\)|\[\]|\{\}/g, '');
        if ($ == s.length) return false;
    }
}

module.exports = isValid;
