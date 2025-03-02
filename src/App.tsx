import playerStats from "../stats/all_time_stats.json"; // Adjust the path as needed

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">All-Time Player Stats</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                {playerStats.players.map((player) => (
                    <div
                        key={player.name}
                        className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition transform hover:scale-105"
                    >
                        <h2 className="text-xl font-semibold text-gray-900">{player.name}</h2>
                        <p className="text-gray-600"><span className="font-medium">Club:</span> {player.club}</p>
                        <p className="text-gray-600"><span className="font-medium">Goals:</span> {player.total_goals}</p>
                        <p className="text-gray-600"><span className="font-medium">Assists:</span> {player.total_assists}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

