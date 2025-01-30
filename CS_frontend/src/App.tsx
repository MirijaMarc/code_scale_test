import React, { useState, useEffect } from 'react';
import { lancer, getScore } from './api';
import './App.css';


const App: React.FC = () => {
  const [quilles, setQuilles] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [frames, setFrames] = useState<any[]>([]);
  const [sframes, setSframes] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const fetchScore = async () => {
      const data = await getScore();
      if (data) {
        setScore(data.score);
        setFrames(data.frames);
        console.log(data.scores_frames);
        
        setSframes(data.scores_frames)
      }
    };
    fetchScore();
  }, []);

  const handleLancer = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const data = await lancer(quilles);
    if (data) {
      setScore(data.score);
      setFrames(data.frames);
      setSframes(data.scores_frames)
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6">

      <h1 className="text-4xl font-extrabold mb-8 text-blue-400">🎳 Jeu de Quilles</h1>


      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
        <label className="block mb-4 text-lg font-medium">
          Nombre de quilles touchées :
          <input
            type="number"
            value={quilles}
            onChange={(e) => setQuilles(Number(e.target.value))}
            min="0"
            max="15"
            className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <button
          onClick={handleLancer}
          disabled={isSubmitting}
          className={`w-full p-3 mt-2 rounded-lg font-semibold transition duration-300 text-white 
            ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 shadow-md'}`}
        >
          {isSubmitting ? '🎯 Lancer en cours...' : '🎳 Lancer'}
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        Score Actuel: {score}
      </h2>

      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-lg mt-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-300">📊 Historique des Frames</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-3 border border-gray-600">Frame</th>
                <th className="p-3 border border-gray-600">Partie 1</th>
                <th className="p-3 border border-gray-600">Partie 2</th>
                <th className="p-3 border border-gray-600">Partie 3</th>
                <th className="p-3 border border-gray-600">Total</th>
              </tr>
            </thead>
            <tbody>
              {frames.map((frame, index) => 
                index + 1 == 5 ? 
                (
                  <tr key={index} className="even:bg-gray-700 odd:bg-gray-800 hover:bg-gray-600 transition duration-200">
                    <td className="p-3 text-center border border-gray-600">{index + 1}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[0] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[1] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[2] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[3] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[4] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{sframes[index] }</td>
                  </tr>
                ) : 
                (
                  <tr key={index} className="even:bg-gray-700 odd:bg-gray-800 hover:bg-gray-600 transition duration-200">
                    <td className="p-3 text-center border border-gray-600">{index + 1}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[0] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[1] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{frame[2] ?? "-"}</td>
                    <td className="p-3 text-center border border-gray-600">{sframes[index] }</td>
                    
                  </tr>
                )


              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;

