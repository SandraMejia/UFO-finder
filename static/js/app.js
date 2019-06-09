var tableData = data;

var filterData = (date, city, state, country, shape) => {
if (shape === 'all'){shape = ''};

    tableDateFiltered = [];
    tableData.map((item) => {
        if (date === '' || item.datetime === date) {
            if (city === '' || item.city === city) {
                if (state === '' || item.state === state) {
                    if (country === '' || item.country === country) {
                        if (shape === '' || item.shape === shape) {
                            tableDateFiltered.push(item);
                        };
                    };
                };
            };
        };
    });



    let tbody = d3.select('#ufo-table > tbody');
    tbody.html('');
    tableDateFiltered.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};


var button = d3.select('#filter-btn')

button.on("click", () => {
    console.log(d3.event.target);
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#selShape");

    filterData(
        inputDate.property('value'),
        inputCity.property('value'),
        inputState.property('value'),
        inputCountry.property('value'),
        inputShape.property('value')
    );
});

filterData('', '', '', '', '');