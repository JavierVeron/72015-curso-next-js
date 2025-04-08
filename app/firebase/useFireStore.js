const useFireStore = async (id) => {
    const urlBase = "http://localhost:3000/api/";
    const url = urlBase + (id ? "producto/" + id : "productos");    
    const response = await fetch(url, {cache:"no-store"});
    const items = await response.json();

    return items;
}

export default useFireStore