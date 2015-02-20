# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Game.destroy_all
Contestant.destroy_all


Game.create({contestant_id: 1, game_score: 1400})
Game.create({contestant_id: 2, game_score: 2500})


Contestant.create({name: "Tova", username: "tova", email: "tovamosk@gmail.com", password_digest: "password", total_score: 20000})
Contestant.create({name:"Daniel", username: "danny", email: "danny@gmail.com", password_digest: "password", total_score: 13000})