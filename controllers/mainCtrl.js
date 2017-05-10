var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

exports.getName = function(){
    return user.name;
};

exports.getLocation = function(){
    return user.location;
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
    return { name: user.occupations };
};

exports.getLatestOccupation = function(){
    var latestOcc = user.occupations;
    var sliced = latestOcc.slice(latestOcc.length - 1, 1);
    return sliced;
};

exports.getHobbies = function(){
    return { hobbies : user.hobbies };   
};

exports.getHobbiesType = function(request, response, next){
    var type = request.params.type;
    var arr = user.hobbies;
    var result = arr.filter(function(value){
        return (value == type)
    })
    return result;
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
       return { family: family}

    } else {
         return {family : user.family};
    }
   
    
}

exports.getFamilyGender = function(request, response){
    var gender = request.params.gender;
    var arr = user.family;
    var result = arr.filter(function(value){
        return (value === gender);
    })
    return result;
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
     return { restaurants : restaurants }

    } else {
        return { restaurants : user.restaurants }
    }
}

exports.getRestaurantName = function(request, response){
    var favRestaurant = request.params.name;
    var arr = user.restaurants;
    var result = arr.filter(function(value){
        return (value === favRestaurant)
    })
    return result;
}

exports.changeName = function(request, response){
    var newName = request.body.newName;
    user.name = newName;
}

exports.changeLocation = function(request, response){
    var newLocation = request.body.newLocation;
    user.location = newLocation;
}

exports.addHobby = function(request, response){
    var newHobbyObj = request.body.newHobbyObj;
    user.hobbies.push(newHobbyObj);
}

exports.addOccupation = function(request, response){
    var newOccupation = request.body.newOccupation;
    user.occupations.push(newOccupation);
}

exports.addFamily = function(request, response){
    var newPersonObj = request.body.newPersonObj;
    user.family.push(newPersonObj);
}

exports.addRestaurant = function(request, response){
    var newRestaurantObj = request.body.newRestaurantObj;
    user.restaurants.push(newRestaurantObj);
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
        return { skillz : skills }
    
}

exports.addSkill = function(request, response){
    let newSkill = request.body.newSkill;
    skills.push(newSkill);
}

exports.getSecrets = function(request, response){
    return secrets;
}