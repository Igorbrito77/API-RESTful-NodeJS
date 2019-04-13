var promise = require('bluebird');

var options = {
    //Opções de inicialização
    promiseLib : promise 
}

var pgp = require('pg-promise')(options);
var connectionStr = 'postgres://postgres@localhost:5432/soccerleague';
var database = pgp(connectionStr);


function getAllTeams(req, res, next){
    database.any('select * from teams_tb')
        .then(function (data){
            res.status(200) .json({
                    status : 'Sucess',
                    data : data,
                    message : 'Listage all Soccer League Teams'
           });
        }
    ).catch(function (err){
        return next(err);
    });
}

function getTeam(req, res, next){
    var teamID = parseInt(req.params.id);
    database.one('select * from teams_tb where id = $1', teamID)
        .then(function (data){
            res.status(200).json({
                status : 'Sucess',
                data : data,
                message : 'Data of the selected team'
            });
        }
    ).catch( function(err){
        return next(err);
    });

}

function addTeam(req, res, next){
    req.body.qtt_titles = parseInt(req.body.qtt_titles);

    database.none('insert into teams_tb (name, city, qtt_titles) values (${name}, ${city} , ${qtt_titles})', req.body)
        .then( function (){
            res.status(200).
                json({
                    status : 'Sucess',
                    message : ('${name} was added in the league', req.body)
                });
        }
    ).catch(function (err){
        return next(err);
    })
    
}

function updateTeam(req, res, next){

    database.none('update teams_tb set name = $1, city = $2, qtt_titles = $3 where id = $4', [req.body.name , req.body.city, 
        parseInt(req.body.qtt_titles), parseInt(req.params.id)])
        .then(function(){
            res.status(200).
                json({
                    status : 'Sucess',
                    message : 'Team updated'
                });
        }
    ).catch(function(err){
        return next(err);
    })

}

function removeTeam(req, res, next){

    database.result('delete from teams_tb where id = $1', parseInt(req.params.id) )
        .then(function(result){
            res.status(200).
                json({
                    status : 'Sucess',
                    message : `Removed ${result.rowCount} team`
             });
        }
    ).catch(function(err){
        return next(err);
    })
}


module.exports = {

    getAllTeams : getAllTeams,
    getTeam : getTeam,
    addTeam : addTeam,
    updateTeam : updateTeam,
    removeTeam : removeTeam
}