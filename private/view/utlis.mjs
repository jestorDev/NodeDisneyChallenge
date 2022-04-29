
export function fetcher(url) {
    return fetch(url,  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
}
