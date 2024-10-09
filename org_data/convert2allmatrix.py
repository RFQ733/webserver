
import pandas as pd
import os
import json 



data = json.load(open("./extraTrees_n=360_metrics_aenmfV.npy.res.json" , "r"))
all_matrix = []
for i in range(561) :
    all = [] 
    for j in range(100):
        all.append(0)
    all_matrix.append(all)

for item in data:
    all_matrix[item[0]] [item[1]]= item[2]
for all in all_matrix:
    all = list(all) 
# save to json 
all_matrix = list(all_matrix)
json.dump(all_matrix, open("./all.json", "w"))

    
        
