'use strict';


module.exports = {

    fromArray: (strings, sort) => {

        let result = [],
            index = 0,
            lastIndex = 0;

        sort = sort || null;
        if (sort === 'asc') {
            strings.sort((a, b) => a.length - b.length);
        } else if (sort === 'desc') {
            strings.sort((a, b) => b.length - a.length);
        }

        strings.forEach(string => {
            string = string.split('');
            string.forEach(char => {
                if (index > 0) {
                    result.splice(index, 0, char);
                    index += (lastIndex + 1);
                } else {
                    result.push(char);
                }
            });

            lastIndex += 1;
            index = lastIndex;
        });

        return result.join('');
    }
};
