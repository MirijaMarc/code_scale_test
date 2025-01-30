class Jeu:
    def __init__(self):
        self.parties = [[] for _ in range(5)]  # 5 parties avec 3 lancers max
        self.partie_actuelle = 0  # Partie en cours

    def lancer(self, quilles: int):
        #Enregistre le nombre de quilles tombées pour un lancer.
        if self.partie_actuelle >= 5:
            return  # Fin du jeu

        self.parties[self.partie_actuelle].append(quilles)

        # 🔹 Règle spéciale pour la 5ᵉ frame
        if self.partie_actuelle == 4:
            if len(self.parties[4]) == 3:
                if sum(self.parties[4]) == 15:  
                    return  # Spare au 2e, 3e lancer -> autoriser 2 lancers supplémentaires
                elif self.parties[4][0] == 15:
                    return  # Strike -> autoriser 3 lancers supplémentaires
                else:
                    self.partie_actuelle += 1  # Fin de la partie si ce n'est pas un spare ou strike
            elif len(self.parties[4]) == 5:  
                self.partie_actuelle += 1  # Fin de la partie après les lancers bonus
        else:
            if len(self.parties[self.partie_actuelle]) == 3 or sum(self.parties[self.partie_actuelle]) >= 15:
                self.partie_actuelle += 1  # On passe à la frame suivante

    def calculer_score_total(self):
        #Calcule le score total avec les règles de Spare et Strike
        score_total = 0

        for i, partie in enumerate(self.parties):
            score_partie = sum(partie)

            # Gestion des Spares (toutes les quilles abattues en 2, 3 lancers)
            if sum(partie) == 15 and len(partie) in (2, 3):
                score_partie += sum(self.parties[i+1][:2]) if i+1 < 5 else 0

            # Gestion des Strikes (toutes les quilles abattues en 1 lancer)
            if len(partie) == 1 and partie[0] == 15:
                score_partie += sum(self.parties[i+1][:3]) if i+1 < 5 else 0

            score_total += score_partie
        return score_total
    
    def calculer_scores_frames(self):
        #Retourne une liste des scores de chaque frame avec gestion des strikes et spares.
        scores_frames = []
        score_total = 0

        for i, frame in enumerate(self.parties):
            if len(frame) == 0:
                scores_frames.append(0)
            else:
                score_frame = sum(frame)

                if sum(frame) == 15 and len(frame) in (2, 3):
                    bonus = sum(self.parties[i+1][:2]) if i+1 < 5 else 0
                    score_frame += bonus

                if len(frame) == 1 and frame[0] == 15:
                    bonus = sum(self.parties[i+1][:3]) if i+1 < 5 else 0
                    score_frame += bonus

                score_total += score_frame
                scores_frames.append(score_total)  # Ajoute le score cumulé à chaque frame

        return scores_frames

