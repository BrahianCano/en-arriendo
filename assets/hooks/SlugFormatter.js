export const SlugFormatter = (keyword1 = '', keyword2 = '', id = '', code = '') => {

    let out = '';
    keyword1 = sanitizeParam(keyword1);
    keyword2 = sanitizeParam(keyword2);

    if (id !== '' && code !== '') {
        out = `${keyword1}-${keyword2}-${id}-${code}`;
    } else if (id !== '') {
        out = `${keyword1}-${keyword2}-${id}`;
    } else {
        out = `${keyword1}-${keyword2}`;
    }

    return out;
}


const sanitizeParam = (text) => {
    const textSanitize = text.toString().toLowerCase()
        .replace(/\s+/g, '-').trim()      // Replace spaces with -
        .replace(/[^\w\-]+/g, '').trim()  // Remove all non-word chars
        .replace(/\-\-+/g, '-').trim()    // Replace multiple - with single -
        .replace(/^-+/, '').trim()        // Trim - from start of text
        .replace(/-+$/, '').trim();       // Trim - from end of text

    return textSanitize;
}