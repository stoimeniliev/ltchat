/**
* Templates
*/



if (Meteor.isClient) {
	Template.messages.helpers({
		messages: function() {
			return Messages.find({}, { sort: { time: -1}});
		}
        
        
	});

	Template.input.events = {
	  'keydown input#message' : function (event) {
		if (event.which == 13) { // 13 is the enter key event
		  if (Meteor.user())
			var name = document.getElementById('name');
		  else
			var name = document.getElementById('name');
          var date = new Date()
          var begun = moment(date).format("hh:mm");
		  var message = document.getElementById('message');
		  if (message.value != '') {
			Messages.insert({
			  name: name.value,
			  message: message.value,
			  datetime: begun,
              time: Date.now()
			});

			document.getElementById('message').value = '';
			message.value = '';
            
		  }
		}
	  }
	}
}
