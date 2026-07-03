//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-03
// Given two database objects, return the second object with any missing properties from the first filled in.
//     Fields that already exist in the record should not be overwritten.

const migrateRecord = (schema, record) => {
    const recordKeys = Object.keys(record);
    
    for(let i = 0; i < recordKeys.length; i++) {
        schema[recordKeys[i]] = record[recordKeys[i]];
    }
    return schema;
}

module.exports = migrateRecord;