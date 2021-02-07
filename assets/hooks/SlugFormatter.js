export const SlugFormatter = (param1='', param2='', param3='') => {

    param1 = param1.toString().toLowerCase()
        .replace(/\s+/g, '-')      // Replace spaces with -
        .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
        .replace(/\-\-+/g, '-')    // Replace multiple - with single -
        .replace(/^-+/, '')        // Trim - from start of text
        .replace(/-+$/, '');       // Trim - from end of text

    if(param3 !== ''){
        return `${param1}-${param2}-${param3}`;
    }else{
        return `${param1}-${param2}`;
    }
}