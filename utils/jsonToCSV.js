const { json2csvAync } = require('json-2-csv');

//function to convert json to csv
const json2csv = async (data, options) => {
    return await json2csvAsync(data, options);
}

module.exports = json2csv;