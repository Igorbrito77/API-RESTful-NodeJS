var express = require('express');
var router = express.Router();

var database = require('../queries');

/**
 * @swagger
 * definitions:
 *   Team:
 *     properties:
 *       name:
 *         type: string
 *       city:
 *         type: string
 *       qtt_titles:
 *         type: integer
 */


/**
 * @swagger
 * /soccerleague/teams:
 *   get:
 *     tags:
 *       - Teams
 *     description: Returns all teams
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of teams
 *         schema:
 *           $ref: '#/definitions/Team'
 */

/**
 * @swagger
 * /soccerleague/teams/{id}:
 *   get:
 *     tags:
 *      - Teams
 *     description: Returns a single team
 *     produces:
 *       - application/json
 *     
 *     parameters:
 *      - name : id
 *        description : Team's id
 *        in : path
 *        required : true
 *        type : integer
 *      
 *     responses:
 *       200:
 *         description: A single team
 *         schema:
 *           $ref: '#/definitions/Team'
 */

/** 
 * @swagger
 * /soccerleague:
 *   post:
 *      tags:
 *          - Teams
 *      description : Insert a new team in the SoccerLeague
 *      produces : 
 *          - application/json
 *      parameters:
 *         - name : team
 *           description : Team object 
 *           in : body
 *           required : true
 *           schema : 
 *              $ref: '#/definitions/Team'
 *      responses:
 *          200:
 *              description : Succesfully created
*/

 /**
 * @swagger
 * /soccerleague/teams/{id}:
 *   put:
 *     tags: Teams
 *     description: Updates a single team
 *     produces: application/json
 *     parameters:
 *       name: team
 *       in: body
 *       description: Fields for the Team resource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/Team'
 *     responses:
 *       200:
 *         description: Successfully updated
 */



/**
 * @swagger
 * /soccerleague/teams/{id}:
 *   delete:
 *     tags:
 *       - Teams
 *     description: Deletes a single team
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Team's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */


router.get('/soccerleague/teams', database.getAllTeams);
router.get('/soccerleague/teams/:id', database.getTeam);
router.post('/soccerleague/teams', database.addTeam);
router.put('/soccerleague/teams/:id', database.updateTeam);
router.delete('/soccerleague/teams/:id', database.removeTeam);


module.exports = router;