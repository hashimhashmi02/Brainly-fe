import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Logo } from "../icons/Logo";
import { ArrowLeft, Sparkles } from "lucide-react";
import { BACKEND_URL } from "../config";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value.trim();
    const password = passwordRef.current?.value;

    if (!username || !password) {
      setError("Come on, we need both username AND password 🙄");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });

      // ✅ Save token with Bearer prefix
      localStorage.setItem("token", `Bearer ${data.token}`);
      console.log("✅ Signin token saved:", `Bearer ${data.token}`);

      navigate("/dashboard");
    } catch (err: any) {
      console.error("❌ Signin error:", err);
      if (err.response?.status === 401) {
        setError("Wrong credentials. Try again, genius 🤦‍♀️");
      } else if (err.response?.status === 404) {
        setError("Account not found. Did you even sign up? 🤔");
      } else {
        setError("Something went wrong. It's not you, it's us... probably 😅");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"/>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"/>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </button>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Logo className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Brainly </span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm mb-4">
              <Sparkles className="h-3 w-3" />
              <span>Welcome back, genius</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to dive back in?
            </h1>
            <p className="text-gray-600">Your saved gems are waiting for you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              reference={usernameRef}
              label="Username"
              placeholder="Your brilliant username"
            />
            <Input
              reference={passwordRef}
              type="password"
              label="Password"
              placeholder="Super secret password"
            />

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              loading={loading}
              variant="primary"
              text={loading ? "Signing you in..." : "Let's go!"}
              fullWidth
            />
          </form>

          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Join the club
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Because forgetting where you saved that perfect tweet is a tragedy 🎭
        </p>
      </div>
    </div>
  );
}
