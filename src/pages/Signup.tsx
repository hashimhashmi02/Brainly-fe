import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";
import { ArrowLeft, Sparkles, UserPlus } from "lucide-react";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        
        if (!username || !password) {
            setError("Username AND password, please. We're not mind readers 🔮");
            return;
        }

        if (password.length < 6) {
            setError("Password too short! Even your pet goldfish could crack that 🐠");
            return;
        }

        setLoading(true);
        setError("");
        
        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            });
            
            const jwt = response.data.token;

            // ✅ Save token with Bearer prefix so backend middleware accepts it
            localStorage.setItem("token", `Bearer ${jwt}`);
            console.log("✅ Signup token saved:", `Bearer ${jwt}`);

            navigate("/dashboard");
        } catch (err: any) {
            console.error("❌ Signup error:", err);
            if (err.response?.status === 409) {
                setError("Username taken! Someone beat you to it. Try being more creative 🎨");
            } else if (err.response?.status === 400) {
                setError("Invalid input. Check your typing skills, champ 📝");
            } else {
                setError("Oops! Our servers are having a moment. Try again in a sec 🤖");
            }
        } finally {
            setLoading(false);
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            signup();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
            {/* ✅ UI untouched */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>

            <div className="relative w-full max-w-md">
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center text-gray-600 hover:text-indigo-600 mb-8 transition-colors duration-200"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to home
                </button>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 p-8 shadow-xl">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <Logo className="h-8 w-8 text-indigo-600" />
                            <span className="text-2xl font-bold text-gray-900">Brainly</span>
                        </div>
                        
                        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <UserPlus className="h-3 w-3" />
                            <span>Join the smart crowd</span>
                        </div>
                        
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Ready to get organized?
                        </h1>
                        <p className="text-gray-600">
                            Create your account and start saving those gems
                        </p>
                    </div>

                    <div onKeyPress={handleKeyPress}>
                        <Input 
                            reference={usernameRef} 
                            placeholder="Pick a clever username" 
                            label="Username"
                        />
                        <Input 
                            reference={passwordRef} 
                            placeholder="Make it strong (6+ characters)" 
                            type="password"
                            label="Password"
                        />
                        
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                {error}
                            </div>
                        )}

                        <Button 
                            onClick={signup} 
                            loading={loading} 
                            variant="primary" 
                            text={loading ? "Creating your account..." : "Join Brainly!"} 
                            fullWidth={true}
                            startIcon={!loading ? <Sparkles className="h-4 w-4" /> : undefined}
                        />
                    </div>

                    <div className="text-center mt-6 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{' '}
                            <button 
                                onClick={() => navigate('/signin')}
                                className="text-indigo-600 hover:text-indigo-700 font-medium"
                            >
                                Welcome back!
                            </button>
                        </p>
                    </div>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Your future self will thank you for this decision 🚀
                </p>
            </div>
        </div>
    );
}
