
const API_URL = 'http://localhost:5000';

export const lancer = async (quilles: number) => {
  try {
    const response = await fetch(`${API_URL}/lancer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quilles }),
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du lancer');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur de communication avec l\'API:', error);
    return null;
  }
};

export const getScore = async () => {
  try {
    const response = await fetch(`${API_URL}/score`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du score');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur de communication avec l\'API:', error);
    return null;
  }
};
