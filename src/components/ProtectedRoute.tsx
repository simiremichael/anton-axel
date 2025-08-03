import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { isAuthenticated } from "@/utils/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = "/admin/login",
}) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsAuthed(authenticated);

      if (!authenticated) {
        navigate(redirectTo);
      }

      setIsChecking(false);
    };

    // Small delay to ensure session storage is available
    const timer = setTimeout(checkAuth, 100);

    return () => clearTimeout(timer);
  }, [redirectTo]);

  if (isChecking) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return isAuthed ? <>{children}</> : null;
};

export default ProtectedRoute;
