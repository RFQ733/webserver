import os 

file = open("./circnames.txt","r")
data = []
for line in file:
    
    data.append(line.strip())
file.close()

import json
data = json.dumps(data)
with open("./dise.json", "w") as f:
    f.write(data)