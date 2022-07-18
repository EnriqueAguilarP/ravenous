const apiKey ='fCQRoiM3-VMHKw1LbFWEcobZ4xolYfC8HPLn95_IjAM21eOtLZgpYOXAtTyhDmSGI6Gc1Uvv6x7_wV4dnrxwcQTSKdxDEgXz95PvvatLBtc8OIvd-dV8I45jD8DVYnYx';
const Yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {
                Authorization: `Bearer ${apiKey}`
            }}).then((response)=>{
                return response.json();
            }).then((jsonResponse)=>{
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map((business)=>{

                    })
                }else{}
            })

    }
};
