const useCookies = (defaultPath: string = '/') => {
    const reloadCookies = () => {
        const cookieArray = document.cookie.split('; ');
        const cookieObject: Record<string, string> = {};
        cookieArray.forEach(cookie => {
            const [name, value] = cookie.split('=');
            cookieObject[name] = decodeURIComponent(value);
        });
        return cookieObject;
    };

    const getItem = (name: string, fallback: string | null = null): string | null => {
        const res = reloadCookies();
        return res[name] || fallback;
    };

    const setItem = (
        name: string,
        value: string,
        milliseconds: number = 86400000,
        path: string = defaultPath,
    ): void => {
        const expires = new Date(Date.now() + milliseconds).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
    };

    const removeItem = (name: string, path: string = defaultPath): void => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
    };

    const clear = (path: string = defaultPath): void => {
        document.cookie.split(';').forEach(cookie => {
            const cookieName = cookie.split('=')[0].trim();
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
        });
    };

    return { reloadCookies, getItem, setItem, removeItem, clear };
};

export default useCookies;
