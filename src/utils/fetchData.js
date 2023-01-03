

export const fetchData = async () => {
     const fetchedData = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
     const data = await fetchedData.json();
     localStorage.setItem('users',JSON.stringify(data));

     const checkUsers = JSON.parse(localStorage.getItem('users'));
     console.log(checkUsers);
}

export const fetchUserById = async (id) => {
     const fetchedData = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
     const data = await fetchedData.json();

     localStorage.setItem('selectedUser',JSON.stringify(data));
}