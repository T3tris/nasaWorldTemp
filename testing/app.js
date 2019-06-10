getData().then(prnt => {
    document.getElementById('head').innerHTML = "Program Ran Check Console"
}).catch(error => {
    console.error(error);
});

async function getData(){
    const response = await fetch('CalenderData.csv');
    const data = await response.text();

    const rows = data.split('\n').slice(1);

    console.log("StartDate", "StartTime", "EndDate", "EndTime");

    rows.forEach(element => {
        const row = element.split(',');
        const startDate = row[0];
        const startTime = row[1];
        const endDate = row[2];
        const endTime = row[3];

        console.log(startDate, startTime, endDate, endTime);
    });
}   