import { useState } from 'react';
import { TrendingUp, Trophy, Calendar, MapPin } from 'lucide-react';

export default function FantasyCricket() {
  const [hoverCard, setHoverCard] = useState(null);
  
  const matches = [
    {
      id: 1,
      venue: 'Wankhede Stadium, Mumbai',
      team1: { name: 'RCB', color: 'bg-red-600', textColor: 'text-yellow-300' },
      team2: { name: 'MI', color: 'bg-blue-600', textColor: 'text-white' },
      date: 'Today, 7:30 PM',
      status: 'Live'
    },
    {
      id: 2,
      venue: 'M.A. Chidambaram Stadium, Chennai',
      team1: { name: 'CSK', color: 'bg-yellow-400', textColor: 'text-yellow-800' },
      team2: { name: 'MI', color: 'bg-blue-600', textColor: 'text-white' },
      date: 'Tomorrow, 3:30 PM',
      status: 'Upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-[#463746] font-sans">
      <div className="container mx-auto px-4 py-40">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Content */}

          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-stone-300">
              Cricket Fantasy League
            </h1>
            <p className="text-lg md:text-2xl text-purple-100 mb-8 pt-9">
              Create your dream team and compete for glory
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                <Trophy size={20} />
                Join Now
              </button>
              <button className="bg-transparent border-2 border-purple-300 text-purple-100 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                <TrendingUp size={20} />
                View Rankings
              </button>
            </div>
          </div>
          
          {/* Right Side - Match Cards */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.map((match) => (
                <div 
                  key={match.id}
                  className={`relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 shadow-xl border border-gray-700 transition-all duration-300 ${hoverCard === match.id ? 'transform scale-105' : ''}`}
                  onMouseEnter={() => setHoverCard(match.id)}
                  onMouseLeave={() => setHoverCard(null)}
                >
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${match.status === 'Live' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}>
                    {match.status}
                  </div>
                  
                  {/* Match Info */}
                  <div className="flex items-center mb-3 text-gray-300 gap-1">
                    <MapPin size={16} />
                    <span className="text-sm w-50">{match.venue}</span>
                  </div>
                  
                  <div className="flex items-center mb-3 text-gray-300 gap-1">
                    <Calendar size={16} />
                    <span className="text-sm">{match.date}</span>
                  </div>
                  
                  {/* Teams */}
                  <div className="flex justify-between items-center my-5">
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`${match.team1.color} h-16 w-16 rounded-full flex justify-center items-center shadow-lg`}>
                        <p className={`${match.team1.textColor} font-bold text-xl`}>
                          {match.team1.name}
                        </p>
                      </div>
                      <p className="text-white font-medium">{match.team1.name}</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-white font-bold text-2xl mb-2">VS</span>
                      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`${match.team2.color} h-16 w-16 rounded-full flex justify-center items-center shadow-lg`}>
                        <p className={`${match.team2.textColor} font-bold text-xl`}>
                          {match.team2.name}
                        </p>
                      </div>
                      <p className="text-white font-medium">{match.team2.name}</p>
                    </div>
                  </div>
                  
                  {/* Create Team Button */}
                  <button className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition duration-300">
                    Create Team
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Active Users", value: "2.5M+" },
            { label: "Total Prize Pool", value: "₹10Cr" },
            { label: "Matches", value: "250+" },
            { label: "Teams Created", value: "12M+" }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-900 bg-opacity-60 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">{stat.value}</p>
              <p className="text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}