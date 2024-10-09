var circ = RNAlist[RNAid]
var disease = [] 
var dis_score = []
for (var i = 0; i < RNAmatrix.length; i++) {
    disease.push(RNAmatrix[i][0])
    dis_score.push(RNAmatrix[i][1])
}

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


var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
    style: [
      {
        selector: 'node',
        style: {
          'content': 'data(id)',
        'font-size': '8px'
            
        }
      },
      {
        selector:"#"+circ,
        style: {
          'background-color': 'yellow',
          'shape':"star"
         
        }
      },

      {
        selector: 'edge',
        style: {
          'curve-style': 'bezier',
          "font-size": "4px",
          'target-arrow-shape': 'triangle',
          'label': 'data(label)', // 显示边的标签
        'text-justification': 'center', // 标签居中
        'text-margin-y': '2px' // 标签与边的距离
        }
      }
    ],
    elements: {
      nodes: nod,
      edges: edg
    },
    layout:{ name: 'cose', 
    nodeRepulsion: 7000 }
    
  });