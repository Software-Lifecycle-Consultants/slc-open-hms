interface ApiResponse{
  status:string;
  data:any;
}

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const postData = async (url: string,data:any):Promise<ApiResponse> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept':'*/*',
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
}

  export const postRegsiterData = async (url: string,data:any):Promise<any> => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept':'*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      
      if (response.status == 200) 
      {
        return response;
      }
            
      return await response.json();
      
    } 
    catch (error) 
    {
      console.error('Error making POST request:', error);
      throw error;
    }
}