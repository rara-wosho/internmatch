import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase-client";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set up auth listener - THIS IS THE CRITICAL PART YOU'RE MISSING
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log("Auth state changed:", _event);
            console.log("current session:", session);
            setUser(session?.user ?? null);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });

        // Clean up subscription on unmount
        return () => subscription.unsubscribe();
    }, []);

    if (loading) return <p>loading user...</p>;

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
