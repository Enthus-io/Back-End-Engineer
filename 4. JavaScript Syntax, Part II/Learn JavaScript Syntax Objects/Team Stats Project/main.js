let team = {
    _players: [
        {
          _firstName: 'Pete', 
          _lastName: 'Wheeler', 
          _age: 54
        }
      ],
    _games: [],
    addPlayer: function(firstName, lastName, age) {
        this._players.push({
            _firstName: firstName,
            _lastName: lastName,
            _age: age
        })
    }
};

team.addPlayer('Pablo', 'Sanchez', 11);
console.log(team);