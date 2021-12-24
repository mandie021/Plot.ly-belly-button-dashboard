// fetch the json file
async function main() {
    const response = await fetch("./samples.json");
    const data = await response.json();
    console.log(data);

    // arrays to hold "values"
    // otu_labels= [];
    // otu_ids = [];
    // sample_values = [];

    const samples = (data.samples);
    console.log(samples);
    // // for loop to get each uto, label, value
    var otu_labels = Object.values(samples.otu_labels);
    var otu_ids = Object.values(samples.otu_ids);
    var sample_values = Object.values(samples.sample_values);
    console.log(sample_values);
    console.log(otu_ids);
    console.log(otu_labels);


   
    // Create our first trace
    var trace1 = [{
        
        x: sample_values,
        y: [`OTU ${otu_ids}`],
        type: "bar",
        name: [otu_labels],
        text: otu_labels,
        orientation: "h"
    }];
    Plotly.newPlot("bar", trace1);
}


main();
