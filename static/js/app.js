// fetch the json file
async function main() {
    const response = await fetch("data/samples.json");
    const data = await response.json();
    console.log(data);

    let samples = data["samples"];
    // console.log('samples:', samples);

/// Drop down with names
var dropdown = document.getElementById('selDataset')
var names = data.names

// console.log(names)
for(var i = 0; i < names.length; i++) {
    var id_names = names[i];
    var id = document.createElement("option");
    id.textContent = id_names;
    id.value = id_names;
    dropdown.appendChild(id);
    // console.log(id)
}
// Samples person for first person id
    let first_id = id[0];
    // console.log(first_id);
    chartBuild(first_id);
    metaBuild(first_id);

//START DASHBOARD
main();

/// DASHBOARD SAMPLE CHANGE  
    function optionChanged(id) {
        chartBuild(id);
        metaBuild(id);
    };
    
/// BAR & BUBBLE CHART 
    function chartBuild(id){
        let samples = data["samples"];
        let sArray = samples.filter(idObj => idObj.id == id);
        let selected_sample = sArray[0];
        var otu_labels = selected_sample.otu_labels;
        var otu_ids = selected_sample.otu_ids;
        var sample_values = selected_sample.sample_values;   
// slicing and sorting
        var topten_values = sample_values.sort((a,b) => b - a).slice(0,10).reverse();
        var top_labels = otu_labels.slice(0,10);
        var top_ids = otu_ids.slice(0,10).map(thing => `OTU ${thing}`).reverse();

    };

        // Create barchart
    var barchart = [{
        x: topten_values,
        y: top_ids,
        type: "bar",
        text: top_labels,
        orientation: "h",   
    }];
    console.log("barchart data", barchart)

    // layout to apply title to chart
    let layout1 = { 
        title: "Top Ten Samples",    
    }

    // plot bar chart and layout
    Plotly.newPlot("bar", barchart, layout1, {responsive: true}); 
   
        // Create bubblechart
    var bubble = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        type: 'scatter',
        mode: 'markers',
        marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth",
        }
    }];

    console.log("bubblechart data", bubble);

    // layout to apply sizing and title
    let layout2 = {
        title: "Bacteria Per Sample",
        xaxis: {
            title: "OTU ID",
        },
    }

    // plot bubble chart and layout
    Plotly.newPlot("bubble", bubble, layout2, {responsive: true});




/// DEMOGRAPHIC PANEL
    function metaBuild(id){
      var panel = document.getElementById('sample-metadata')
        let metadata = data.metadata
        let mArray = metadata.filter((idObj => idObj.id == id));
        let selcected_demo = metadata[0];  
        for(const [key, value] of Object.entries(selcected_demo)) {
            panel.append(`${key.toUpperCase()}: ${value}`);
        };
    };  

}

main();
