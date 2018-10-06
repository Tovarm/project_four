# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Game.destroy_all
Contestant.destroy_all


Game.create({contestant_id: 1, username: "tova", game_score: 1400})
Game.create({contestant_id: 2, username: "danny", game_score: 2500})
Game.create({contestant_id: 3, username: "frank", game_score: 7600})
Game.create({contestant_id: 4, username: "sylvia", game_score: 2310})
Game.create({contestant_id: 3, username: "frank", game_score: 700})
Game.create({contestant_id: 2, username: "danny", game_score: 625})


Contestant.create({name: "Tova", username: "tova", email: "tovamosk@gmail.com", password: "password", total_score: 20000})
Contestant.create({name: "Daniel", username: "danny", email: "danny@gmail.com", password: "password", total_score: 13000})
Contestant.create({name: "Frank", username: "frank", email: "frank@gmail.com", password: "password", total_score: 2700})
Contestant.create({name: "Sylvia", username: "sylvia", email: "sylvia@gmail.com", password: "password", total_score: 9900})
Contestant.create({name: "Larry", username: "larry", email: "larry@gmail.com", password: "password", total_score: 1445})
