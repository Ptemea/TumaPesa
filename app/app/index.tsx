import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';

const AppTabs = () => {
  const [isLayoutMounted, setIsLayoutMounted] = useState(false);

  // Simulate a delay to ensure that the layout is mounted
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        setIsLayoutMounted(true);
        router.replace('/(tabs)'); // Navigate to the tabs
      } catch (error) {
        console.error('Navigation error:', error);
      }
    }, 100); // Small delay to ensure layout is ready

    return () => clearTimeout(timeout); // Clean up the timeout
  }, []);

  // Return null until the layout is ready and navigation is triggered
  if (!isLayoutMounted) {
    return null;
  }

  return null;
};

export default AppTabs;
