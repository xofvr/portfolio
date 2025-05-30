// Clear Old Cache Script
// This script helps unregister old service workers and clear caches
// Run this once in browser console to clean up old caching system

(async function clearOldCacheSystem() {
    console.log('🧹 Starting cleanup of old caching system...');
    
    try {
        // 1. Unregister all service workers
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                console.log('🗑️ Unregistering service worker:', registration.scope);
                await registration.unregister();
            }
            console.log('✅ All service workers unregistered');
        }
        
        // 2. Clear all caches
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            for (let cacheName of cacheNames) {
                console.log('🗑️ Deleting cache:', cacheName);
                await caches.delete(cacheName);
            }
            console.log('✅ All caches cleared');
        }
        
        // 3. Clear local storage related to the app
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.includes('portfolio') || key.includes('cache') || key.includes('sw'))) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => {
            console.log('🗑️ Removing localStorage key:', key);
            localStorage.removeItem(key);
        });
        
        // 4. Clear session storage related to the app
        const sessionKeysToRemove = [];
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            if (key && (key.includes('portfolio') || key.includes('cache') || key.includes('sw'))) {
                sessionKeysToRemove.push(key);
            }
        }
        sessionKeysToRemove.forEach(key => {
            console.log('🗑️ Removing sessionStorage key:', key);
            sessionStorage.removeItem(key);
        });
        
        console.log('🎉 Cleanup complete! The app will now use default browser caching.');
        console.log('💡 You may want to hard refresh (Ctrl+Shift+R / Cmd+Shift+R) to ensure all changes take effect.');
        
    } catch (error) {
        console.error('❌ Error during cleanup:', error);
    }
})();
