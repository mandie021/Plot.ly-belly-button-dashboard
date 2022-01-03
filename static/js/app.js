// fetch the json file
async function main() {
    const response = await fetch("data/samples.json");
    const data = await response.json();
    console.log(data);

    let samples = data["samples"];

    // console.log('samples:', samples);

/// Drop down with names
    /// using data.names for the ID #
var dropdown = document.getElementById('selDataset');
var names = data.names;
for(var i = 0; i < names.length; i++) {
    var id_names = names[i];
    var id = document.createElement("option");
    id.textContent = id_names;
    id.value = id_names;
    dropdown.appendChild(id);
    console.log("ID", id)
    console.log("names", id_names)
};


// Samples person for first person id
    /// using data.names ID 940 
    let first_id = data.names[0];
    console.log("first id", first_id);
    chartBuild(first_id);
    metaBuild(first_id);
};
//START DASHBOARD
main();

/// DASHBOARD SAMPLE CHANGE
    /// for new id #
    function optionChanged(new_id) {
        chartBuild(new_id);
        metaBuild(new_id);
    };
    
/// BAR & BUBBLE CHART 
// variables for the chart build
    //using data.samples for the sample values, otu ids, and otu labels
    function chartBuild(new_id){
        let samples = data.samples;
        var selected_sample;
    // Loop through the length of the array
        for (let i = 0; i < samples.length; i++) {
            console.log (i, samples[i]);
            if (samples[i].id == id_names) {
                new_id = samples[0];
                console.log(new_id)
            }
        };
        // const sArray = Object.entries(samples);
        

        // let sArray = samples.filter(samples => samples.id == id.names);
//         console.log(samples) 
            // console.log(sArray)
//         let selected_sample = sArray[0];
//         console.log(selected_sample)


// bubble chart values
        var otu_labels = selected_sample.otu_labels;
        var otu_ids = selected_sample.otu_ids;
        var sample_values = selected_sample.sample_values;   

        
// slicing and sorting for bar chart
        var topten_values = sample_values.sort((a,b) => b - a).slice(0,10).reverse();
        var top_labels = otu_labels.slice(0,10);
        var top_ids = otu_ids.slice(0,10).map(thing => `OTU ${thing}`).reverse();

   


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

 };


/// DEMOGRAPHIC PANEL
    function metaBuild(new_id){
      var panel = document.getElementById('sample-metadata')
        let metadata = data.metadata
        for(let i = 0; i < metadata.length; i++){ 
            mArray= metadata[i];
        };      
        let selcected_demo = mArray.filter == id_names;  
        for(const [key, value] of Object.entries(selcected_demo)) {
            panel.append(`${key.toUpperCase()}: ${value}`);
        };
    };  

// };

// main();
