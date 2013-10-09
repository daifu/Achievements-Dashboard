describe("Achievements", function() {
  var fakeJSON = {
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
    },{
      "id":104 ,
      "title":"Turn on Push Notifications",
      "type":"standard",
      "properties":{
        "goalName":"Count",
        "goalCount":1,
        "rewardName":"Stars",
        "rewardCount":1,
        "active":false
      }
    }]
  };
  beforeEach(function(){
    app.Achievements.reset(fakeJSON['achievements']);
  });

  describe("update_if_changed", function(){
    it("should call check_or_update", function() {
      spyOn(app.Achievements, 'check_or_update');
      app.Achievements.update_if_changed();
      expect(app.Achievements.check_or_update).toHaveBeenCalled();
    });
  });

  describe("check_or_update", function(){
    var model,
        options;

    beforeEach(function(){
      model   = app.Achievements.models[0];
      options = {beforeAjax: function(){}, afterAjax: function(){}};
    });

    it("should check model hasChanged", function() {
      spyOn(model, 'hasChanged');
      app.Achievements.check_or_update(model);
      expect(model.hasChanged).toHaveBeenCalled();
    });

    it("should call save if the model has been changed", function(){
      model.toggleActive();
      spyOn(model, 'save');
      app.Achievements.check_or_update(model, options);
      expect(model.save).toHaveBeenCalled();
    });
  });

});
