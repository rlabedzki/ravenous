const apiKey = "";

const yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }

        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business =>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        rating: business.rating,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.CA,
                        zipCode: business.location.zip_code,
                        category: business.categories.alias,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
}

export default yelp;