// fetch the json file
async function main() {
    const response = await fetch("./samples.json");
    const data = await response.json();
    console.log(data);

    // create array of "samples" otu_labels.
    // {"id": "941", "otu_ids": [2722, 944, 2419, 2539, 3450, 1795, 2389, 1314, 922, 1167, 2859, 963, 2964, 2651, 2308, 
    //482, 874, 2908, 1870, 2264, 41, 728, 1188, 352, 2782, 1926, 1959, 1200, 1977, 3312, 261, 296, 2890, 1929, 555, 
    //2704, 2688, 710, 189, 2500, 2461, 854, 939, 1310], 

    //"sample_values": [194, 178, 162, 92, 84, 40, 37, 28, 27, 24, 21, 21, 13, 10, 10, 8, 8, 5, 5, 4, 4, 
    //3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

    // "otu_labels": ["Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", 
    //"Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", 
    //"Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", 
    //"Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", 
    //"Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", 
    //"Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", 
    //"Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", 
    //"Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Dermabacteraceae;Dermabacter", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria", 
    //"Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Aerococcaceae", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", 
    //"Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", 
    //"Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Firmicutes;Clostridia", 
    //"Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", 
    //"Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales", "Bacteria", "Bacteria", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;Lachnospiraceae", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", 
    //"Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", 
    //"Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", 
    //"Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", 
    //"Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Mobiluncus", 
    //"Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", 
    //"Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella"]},

    // arrays to hold "values"
    // uto_labels= [];
    // uto_ids = [];
    // sample_values = [];

    const samples = (data.samples);
    console.log(samples);
    // uto_ids = samples.map(function (row){
    //     return row.otu_ids
    // });
    // console.log(uto_ids);

    // // uto_labels = samples.map(function (row) {
    // //     return row.uto_labels
    // // });
    // // console.log(uto_labels);
    // // for loop to get each uto, label, value
    for(let i = 0; i < samples.length; i++){ 
        console.log(samples[i]);
        let childArray = samples[i].otu_ids; 
        for(let j = 0; j < childArray.length; j++){ 
            console.log(childArray[j]);
        }
    }
}

main();
