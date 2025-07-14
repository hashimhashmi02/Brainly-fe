

import { useNavigate } from 'react-router-dom';
import { Twitter, Youtube, Bookmark, Sparkles, Brain } from 'lucide-react';
import { Logo } from '../icons/Logo';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
  
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Brainly</span>
            </div>
            <button
              onClick={() => navigate('/signup')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200"
            >
              Sign Up
            </button>
          </nav>
        </div>
      </header>

     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20 lg:py-32">
         
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Stop losing great content</span>
          </div>

        
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your digital brain for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              X & YouTube gems
            </span>
          </h1>

       
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Because scrolling past that perfect tweet or brilliant video again is basically a crime against your future self.
          </p>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
              <Twitter className="h-6 w-6 text-blue-500" />
              <span className="text-gray-700 font-medium">X (Twitter)</span>
            </div>
            <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
              <Youtube className="h-6 w-6 text-red-500" />
              <span className="text-gray-700 font-medium">YouTube</span>
            </div>
          </div>

       
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/signup')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Saving Links
            </button>
            <p className="text-gray-500 text-sm">No credit card required</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-16">
          {[
            {
              icon: <Bookmark className="h-8 w-8 text-blue-600" />,
              title: "One-Click Save",
              desc: "Bookmark tweets and videos instantly. No more “I'll save this later” lies.",
              bg: "bg-blue-100"
            },
            {
              icon: <Brain className="h-8 w-8 text-purple-600" />,
              title: "Smart Organization",
              desc: "We'll organize your saved content so you can actually find it again.",
              bg: "bg-purple-100"
            },
            {
              icon: <Sparkles className="h-8 w-8 text-green-600" />,
              title: "Never Lose Again",
              desc: "That thread you meant to read? The tutorial you bookmarked? They're all here.",
              bg: "bg-green-100"
            }
          ].map((f, i) => (
            <div
              key={i}
              className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${f.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

    
      <footer className="bg-gray-50 border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Logo className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">brainly</span>
          </div>
          <p className="text-gray-600">Your digital brain for the good stuff.</p>
        </div>
      </footer>
    </div>
  );
}
