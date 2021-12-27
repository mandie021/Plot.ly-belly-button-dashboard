// fetch the json file
async function main() {
    const response = await fetch("./samples.json");
    const data = await response.json();
    console.log(data);

    let samples = data["samples"];
    console.log('samples:', samples);

/// BAR CHART 


    for (let i = 0; i < samples.length; i++) {    
        var samplesArray = samples[i];         
        // console.log(samplesArray);
        // create array of each item values
        var otu_labels = Object.values(samplesArray.otu_labels);
        var otu_ids = Object.values(samplesArray.otu_ids);
        var sample_values = Object.values(samplesArray.sample_values);
    }
    // Sort and get top 10 otu_ids
    let sortedByotuid = samples.sort((a, b) => b.otu_ids - a.otu_ids);
    otu_top10 = sortedByotuid.slice(1,10);
        // Create our first trace
    var barchart = [{
        x: sample_values,
        y: otu_ids,
        // name: [`OTU` + {otu_ids}],
        type: "bar",
        text: otu_labels,
        orientation: "h",
        
    }];
    console.log("barchart data", barchart)
    // layout to apply title to chart
    let layout1 = { 
        title: "Top Ten Samples",
       xaxis: {
           title: "Sample Values",
       },
       yaxis: {
           title: [`OTU ${otu_ids}`],
       },
    
    }
    // plot bar chart and layout
    Plotly.newPlot("bar", barchart, layout1, {responsive: true}); 
            

        
/// BUBBLE CHART
   
    var bubble = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
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
        title: "Values of Samples",
        xaxis: {
            title: "OTU ID",
        },
        yaxis: {
            title: "Counts"
        },
    }
    // plot bubble chart and layout
    Plotly.newPlot("bubble", bubble, layout2, {responsive: true});


/// DEMOGRAPHIC PANEL
    let metadata = data.metadata; 
    console.log("metadata", metadata) 

    

      


   

}


main();
