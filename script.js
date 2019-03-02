function getData(){
    fetch(`https://api.punkapi.com/v2/beers/`)
            .then(result => {
                console.log(result);
                
                return result.json();
            })
            .then(data =>{
                console.log(data[0].abv)
                console.log(data)

                let massPopChart = new Chart(myChart, {
                    type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, poLarArea
                    data:{
                        labels:[data[0].name, data[1].name, data[2].name, data[3].name, data[4].name],
                        datasets:[{
                        label: 'Percentage',
                        data:[
                        data[0].abv,
                        data[1].abv,
                        data[2].abv,
                        data[3].abv,
                        data[4].abv
                        ]}
                        ]
                    },
                    options: {

    }
});
            })
           
        }
        getData();

let myChart = document.getElementById('myChart').getContext('2d');

/*let massPopChart = new Chart(myChart, {
            type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, poLarArea
            data:{
                labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[{
                    label: 'Population',
                    data:[
                        6234234,
                        2342334,
                        2342342,
                        6575675,
                        7564433

                    ]}
                ]
            },
            options: {

            }
});*/
