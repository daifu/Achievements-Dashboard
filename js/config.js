/*global $*/
/*jshint unused:false */
var app = app || {};

app.Config = {};
app.Config.postUrl = 'http://frontend.challengeles.scopely.io/post';
app.Config.getUrl  = '';
app.Config.fakeJSON  = {
  "achievements":[
    {
      "id":100 , 
      "title":"Spell 3 \"Fruits\"", 
      "type":"daily", 
      "properties":{
        "goalName":"Count",
        "goalCount":3, 
        "rewardName":"Coins",
        "rewardCount":50,
        "active":true
      } 
    }, 
    {
      "id":101 , 
      "title":"Spell 3 \"Monsters\"", 
      "type":"daily", 
      "properties":{
        "goalName":"Count",
        "goalCount":3, 
        "rewardName":"Coins",
        "rewardCount":50,
        "active":false
      } 
    }, 
    {
      "id":102 , 
      "title":"Spell 3 \"Oceans\"", 
      "type":"daily", 
      "properties":{
        "goalName":"Count",
        "goalCount":3, 
        "rewardName":"Coins",
        "rewardCount":50,
        "active":false
      } 
    }, 
    {
      "id":103 , 
      "title":"Complete 4 Games", 
      "type":"daily", 
      "properties":{
        "goalName":"Count",
        "goalCount":4, 
        "rewardName":"Coins",
        "rewardCount":100,
        "active":false
      } 
    }, 
    {
      "id":104 , 
      "title":"Turn on Push Notifications", 
      "type":"standard", 
      "properties":{
        "goalName":"Count",
        "goalCount":1, 
        "rewardName":"Stars",
        "rewardCount":1,
        "active":true
      } 
    },
    {
      "id":105 , 
      "title":"Upload a profile pic", 
      "type":"standard", 
      "properties":{
        "goalName":"Count",
        "goalCount":1, 
        "rewardName":"Trophies",
        "rewardCount":2,
        "active":true
      } 
    },
    {
      "id":106 , 
      "title":"Spell a 7-letter word 75 times", 
      "type":"standard", 
      "properties":{
        "goalName":"Count",
        "goalCount":75, 
        "rewardName":"Trophies",
        "rewardCount":1,
        "active":true
      } 
    }, 
    {
      "id":107 , 
      "title":"Spell 3 \"Palindromes\"", 
      "type":"standard", 
      "properties":{
        "goalName":"Count",
        "goalCount":3, 
        "rewardName":"Trophies",
        "rewardCount":2,
        "active":true
      } 
    }, 
    {
      "id":108 , 
      "title":"Lock 25 Tiles", 
      "type":"standard", 
      "properties":{
        "goalName":"Count",
        "goalCount":25, 
        "rewardName":"Stars",
        "rewardCount":5,
        "active":true
      }
    }
  ]
};
