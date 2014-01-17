Messages = new Meteor.Collection("messages");

if (Meteor.isClient) {
  Template.message_list.messages = function (){
    return Messages.find();
  };

  Template.hello.events({
    'submit' : function (event, context) {
      event.preventDefault();
      Messages.insert({ text: $('.prompt').val() })
      $('html, body').animate({scrollTop: $(document).height()});
      $('.prompt').val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      clearChat: function() {
        return Messages.remove({});
      }
    });
  });
}
