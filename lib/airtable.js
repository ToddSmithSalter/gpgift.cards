import Airtable from 'airtable';

const base = new Airtable({
apiKey: process.env.AIRTABLE_API_KEY}).base('appDPtxL8dIXOjvYT');
const table = base('Businesses')
const selectCriteria = { view: 'Approved Businesses'};

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
    return records.map(record => minifyRecord(record));
};

    // gets the data we want and puts it into variables
const minifyRecord = record => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

export default async function getBusinesses() {
    const records = await table.select(selectCriteria).all();
    const minifiedRecords = await getMinifiedRecords(records).sort((a,b) => a > b ? 1 : -1);
    return minifiedRecords;
}
