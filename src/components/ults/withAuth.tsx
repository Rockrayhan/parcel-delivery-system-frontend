import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";
import { SkeletonCard } from "../provider/SkeletonCard";
import { useEffect, useState } from "react";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading, isFetching, refetch } =
      useUserInfoQuery(undefined);
    const [checkingAuth, setCheckingAuth] = useState(true);

    // take some time after login to refetch
    useEffect(() => {
      const timer = setTimeout(() => {
        refetch();
        setCheckingAuth(false);
      }, 300);

      return () => clearTimeout(timer);
    }, [refetch]);

    if (isLoading || isFetching || checkingAuth) {
      return <SkeletonCard />;
    }

    const user = data?.data;

    if (!user?.email) {
      return <Navigate to="/login" replace />;
    }

    if (requiredRole && user.role !== requiredRole) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <Component />;
  };
};


