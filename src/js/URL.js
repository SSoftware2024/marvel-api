const url = {
    set: (key, value) => {
        let url = new URL(window.location.href);
        url.searchParams.set(key, value);
        window.history.pushState({}, '', url.toString());
    },
    get: (key) => {
        let url = new URL(window.location.href);
        return url.searchParams.get(key);
    },
    delete: (key) => {
        let url = new URL(window.location.href);
        url.searchParams.delete(key);
        window.history.pushState({}, '', url.toString());
    }
}
export default url;