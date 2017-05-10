var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

exports.getName = function(request, response){
    response(200).json(user.name);
};

exports.getLocation = function(request, response){
    response(200).json(user.location);
};

exports.getOccupations = function(request, response){
    var order = request.query.order;
    if(order){
        if(order === desc){
            return user.occupations.sort().reverse();
        } else if(order === asc){
            return user.occupations.sort();
        } 
    }
    response(200).json(user.occupations );
};

exports.getLatestOccupation = function(request, response){
    var latestOcc = user.occupations;
    var sliced = latestOcc.slice(latestOcc.length - 1, 1);
    response(200).json(sliced);
};

exports.getHobbies = function(request, response){
    response(200).json(user.hobbies);   
};

exports.getHobbiesType = function(request, response, next){
    var type = request.params.type;
    var arr = user.hobbies;
    var result = arr.filter(function(value){
        return (value == type)
    })
    response(200).json(result);
};

exports.getFamily = function(request, response){
    var relation = request.query.relation;
    var family = user.family.slice();
    if(relation){
        for(var i = family.length - 1; i >= 0; i--){
            if(relation != family[i].relation){
                family.splice(i, 1);
            }
        }
       response(200).json(family)

    } else {
         response(200).json(user.family);
    }
   
    
}

exports.getFamilyGender = function(request, response){
    var gender = request.params.gender;
    var arr = user.family;
    var result = arr.filter(function(value){
        return (value === gender);
    })
    response(200).json(result);
}

exports.getRestaurants = function(request, response){
    var rating = parseInt(request.query.rating, 10);
    var restaurants = user.restaurants.slice();
    if(rating >= 2){
        for(var i = restaurants.length - 1; i >= 0; i--){
            if(rating != restaurants[i].rating){
                restaurants.splice(i, 1);
            }
        }
     response(200).json(restaurants);

    } else {
        response(200).json(user.restaurants)
    }
}

exports.getRestaurantName = function(request, response){
    var favRestaurant = request.params.name;
    var arr = user.restaurants;
    var result = arr.filter(function(value){
        return (value === favRestaurant)
    })
    response(200).json(result);
}

exports.changeName = function(request, response){
    var newName = request.body.newName;
    user.name = newName;
    response(200).send('OK');
}

exports.changeLocation = function(request, response){
    var newLocation = request.body.newLocation;
    user.location = newLocation;
    response(200).send('OK');
}

exports.addHobby = function(request, response){
    var newHobbyObj = request.body.newHobbyObj;
    user.hobbies.push(newHobbyObj);
    response(200).send('OK');
}

exports.addOccupation = function(request, response){
    var newOccupation = request.body.newOccupation;
    user.occupations.push(newOccupation);
    response(200).send('OK');
}

exports.addFamily = function(request, response){
    var newPersonObj = request.body.newPersonObj;
    user.family.push(newPersonObj);
    response(200).send('OK');
}

exports.addRestaurant = function(request, response){
    var newRestaurantObj = request.body.newRestaurantObj;
    user.restaurants.push(newRestaurantObj);
    response(200).send('OK');
}

exports.getSkillz = function(request, response){
    var skills = skillz.skills.slice();
    var experience = request.query.experience;
    if(experience){
        for(var i = skills.length - 1; i >= 0; i--){
            if(experience != skills[i].experience){
                skills.splice(i, 1);
            }
        }

    }
       response(200).json(skills)
    
}

exports.addSkill = function(request, response){
    let newSkill = request.body.newSkill;
    skills.push(newSkill);
    response(200).send('OK');
}

exports.getSecrets = function(request, response){
    response(200).json(secrets);
}