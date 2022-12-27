

export const fetchData = async () => {
     const fetchedData = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
     const data = await fetchedData.json();
     
     localStorage.setItem('users',JSON.stringify(data))
}