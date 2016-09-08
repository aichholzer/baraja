'use strict';


module.exports = {

    weave: (input, sort) => {

        let result = [],
            index = 0,
            lastIndex = 0;

        sort = sort || null;
        if (sort === 'asc') {
            input.sort((a, b) => a.length - b.length);
        } else if (sort === 'desc') {
            input.sort((a, b) => b.length - a.length);
        }

        input.forEach(string => {
            string.split('').forEach(char => {
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
    },

    across: function (input, selection, result, index) {

        index = index || 0;
        selection = selection || [];
        result = result || {};

        input = input.sort();
        let left = input.filter(x => selection.indexOf(x) == -1),
            right = left[Math.round(Math.random() * (left.length - 1))];

        if (input[index] === right) {
            selection = [];
            return this.across(input, selection, result);
        }

        selection.push(right);
        result[input[index]] = right;

        index += 1;
        if (index < input.length) {
            return this.across(input, selection, result, index);
        }

        return result;
    }
};
