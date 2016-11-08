var jsonData = [
    {name: 'Bathroom', upload: 70},
    {name: 'Other', upload: 30},
]

var data = {};
var sites = [];
jsonData.forEach(function(e) {
    sites.push(e.name);
    data[e.name] = e.upload;
})

chart = c3.generate({
  bindto: '#chart',
    data: {
        json: [ data ],
        keys: {
            value: sites,
        },
        type:'pie'
    },
});
