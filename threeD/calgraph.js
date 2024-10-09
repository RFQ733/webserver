var circ = "hsa_circ_11221"
var disease = [
    
    "cancer" , 
    "diabetes" ,
    "cardiovascular" ,
    "neurological" ,
    "infectious" ,
    "autoimmune" 
]
var nod = []
nod.push(
    {
        data: {
            id: circ,
            label: circ,
            color: "red",
        }
    }
)
for (var i = 0; i < disease.length; i++) {
    nod.push(
        {
            data: {
                id: disease[i],
                label: disease[i],
      
                
                
            }
        }
    )

}

var edg = []
for (var i = 0 ; i < disease.length; i++) {
    edg.push(
        {
            data: {
                id: circ + disease[i],
                source: circ,
                target: disease[i],
                label: dis_score[i]
            }
        }
    )

}

