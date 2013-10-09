describe("Achievement", function() {
  var fakeJSON = {
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
  };
  var model;

  beforeEach(function(){
    model = new app.Achievement(fakeJSON);
  });

  describe("toggleActive", function(){
    it("should changed the model", function() {
      model.toggleActive();
      expect(model.hasChanged()).toEqual(true);
    });
  });
});
