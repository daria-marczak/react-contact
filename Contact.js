var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement("div", {className: "contactItem"},
			React.createElement("img", {
				className: "contactImage",
				src: "http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"
			}),
			React.createElement("p", {className: "contactLabel"}, "First name: " + this.props.item.firstName),
			React.createElement("p", {className: "contactLabel"}, "Last name: " + this.props.item.lastName),
			React.createElement("a", {className: "contactEmail", href: "mailto:" + this.props.item.email}, this.props.item.email)
			)
		)
	}
});

var contacts = [
	{
		id: 1,
		firstName: "John",
		lastName: "Smith",
		email: "john.smith@domain.com"
	},
	{
		id: 2,
		firstName: "Jane",
		lastName: "Doe",
		email: "jane.doe@domain.com"
	},
	{
		id: 3,
		firstName: "Janine",
		lastName: "Depardieu",
		email: "janine.dep@domain.fr"
	}
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});
