var user = {
    name: 'Jessica',
    location: 'Provo',
    occupations: ['personal trainer', 'biologist', 'student'],
    hobbies: [
    {
      name: 'yoga',
      type: 'exercise'
    },
    {
      name: 'weight lifting',
      type: 'exercise'
    },
    {
      name: 'hiking',
      type: 'exercise'
    }
  ],
  family: [
    {
      name: 'Loren',
      relation: 'husband',
      gender: 'male'
    },
    {
      name: 'Lori',
      relation: 'mom',
      gender: 'female'
    },{
      name: 'Evan',
      relation: 'dad',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'Chilis',
      type: 'american',
      rating: 8
    },
    {
      name: 'Texas Roadhouse',
      type: 'steaks',
      rating: 10
    },
    {
      name: 'Pizza Limone',
      type: 'pizza',
      rating: 8
    }
  ]
};

module.exports = user;