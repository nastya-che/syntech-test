const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
    await sleep(500);
    values['date_of_birth'] = values['dateDay'] + '/' + values['dateMonth'] + '/' + values['dateYear'];
    delete values.dateDay;
    delete values.dateMonth;
    delete values.dateYear;
    console.log(JSON.stringify(values, null, 2));
});