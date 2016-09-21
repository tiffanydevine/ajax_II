import json

def process_player_data():
	'''Processes NBA JSON file to python dictionary
	{'name:
	    {stat: #,
	     Stat2: #2},
	 'name2':
	    {stat: #,
	     Stat2: #2},
	}
	'''
	with open ('player_data.json', 'r') as f:
    	data = json.load(f)

    stat_line=data['resultSets'][1]['rowSet']
    headers=data['resultSets'][1]['headers']

	for player in stat_line:
	    players[player[2]] = {}
	    for i,header in enumerate(headers):
	        players[player[2]][header] = player[i]
	return players
