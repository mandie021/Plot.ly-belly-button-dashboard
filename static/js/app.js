// fetch the json file
async function main() {
    const response = await fetch("data/samples.json");
    const data = await response.json();
    console.log(data);

    let samples = data["samples"];
    // console.log('samples:', samples);

// Samples person for first person id
    let first_id = samples[0];
    // console.log(first_id);

/// getting some variables for the first samples 
    var otu_labels = first_id.otu_labels;
    var otu_ids = first_id.otu_ids;
    var sample_values = first_id.sample_values;    
    // console.log(otu_labels);
    // console.log(otu_ids);
    // console.log(sample_values);









// slicing and sorting
    var topten_values = sample_values.sort((a,b) => b - a).slice(0,10).reverse();
    var top_labels = otu_labels.slice(0,10);
    var top_ids = otu_ids.slice(0,10).map(thing => `OTU ${thing}`).reverse();
 
    
/// BAR CHART 

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


/// BUBBLE CHART
   
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

/// DEMOGRAPHIC PANEL
    var PANEL = document.getElementById('sample-metadata')
    let metadata = data.metadata
    let first_info = metadata[0];

    // for(var i = 0; i < metadata.length; i++) {
        for(const [key, value] of Object.entries(first_info)) {
            // console.log(`${key.toUpperCase()}: ${value} `);
            PANEL.append(`${key.toUpperCase()}: ${value}`);
        };
    // }    
   
    /// DASHBOARD SAMPLE CHANGE
    // const id_change = document.getElementById('select');

    // id_change.addEventListener('click', optionChanged);
    
    function optionChanged(id) {
        var selectedSample = document.getElementByID('option').value;
        //add value for selectedSample so you can work with the id.value or id.text
        // var input = selectBox.options[selectBox.selectedIndex].value;
        /// add argument to change charts if this.value is running a string object value
        // this.value = id.value **** meaning this.value is equal to dropdown
        alert(selectedSample);
        // 
    
    
    
    
    
        // if input =
        // for (let i = 0; i < samples.length; i++) {    
        //     var samplesArray = samples[i];
        //         var topten_values = samplesArray.otu_ids.sort((a,b) => b - a).slice(0,10).reverse();
        //         var top_labels = samplesArray.otu_labels.slice(0,10);
        //         var top_ids = samplesArray.otu_ids.slice(0,10).map(thing => `OTU ${thing}`).reverse();         
        //         console.log("samplesArray", samplesArray);
        //     // create array of each item values
                // var otu_labels = Object.values(samplesArray.otu_labels[i]);
                // var otu_ids = Object.values(samplesArray.otu_ids[i]);
                // var sample_values = Object.values(samplesArray.sample_values[i]);
        // };
    }
    

    // document.querySelectorAll('selDataset').forEach((el) => {
    //     el.addEventListener('click', (event) => {
    //     console.time('selDataset');
    //     event.preventDefault();
    //     let data = [];

    //     if (event.target.value == 'us') {
    //         data = us;
    //     }
    //     else if (event.target.value == 'uk') {
    //         data = uk;
    //     }
    //     else if (event.target.value == 'canada') {
    //         data = canada;
    //     }
    //     const element = document.getElementById(event.target.dataset.target);
    //     element.scrollIntoView();
    //     console.timeEnd('selDataset');
    //     });
    // });
        

      


   

}

main();
