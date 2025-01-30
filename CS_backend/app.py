from flask import Flask, request, jsonify
from jeu import Jeu
from flask_cors import CORS  # Importer CORS

app = Flask(__name__)
jeu = Jeu()

CORS(app)

@app.route('/lancer', methods=['POST'])
def lancer():
    """Endpoint pour recevoir un lancer et calculer le score"""
    data = request.get_json()  # Récupère les données JSON envoyées
    quilles_abattues = data.get('quilles', 0)
    
    if quilles_abattues < 0 or quilles_abattues > 15:
        return jsonify({"error": "Le nombre de quilles doit être entre 0 et 15"}), 400
    
    jeu.lancer(quilles_abattues)  # Ajoute le lancer et calcule le score et les scores par frames
    return jsonify({"score": jeu.calculer_score_total(), "frames": jeu.parties, "scores_frames" : jeu.calculer_scores_frames()})

@app.route('/score', methods=['GET'])
def score():
    """Retourne le score actuel"""
    return jsonify({"score": jeu.calculer_score_total() , "frames": jeu.parties, "scores_frames" : jeu.calculer_scores_frames()})

if __name__ == '__main__':
    app.run(debug=True)
