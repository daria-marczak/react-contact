var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
		<div className = {"contactItem"} >
			<img className = {"contactImage"} src = {"http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"} alt = "contact" / >
			<p className = {"contactLabel"}>
				First name: {this.props.item.firstName0}
			</p>
			<p className = {"contactLabel"}>
	            		Last name: {this.props.item.lastName}
			</p>
			<a href = {"mailto" + this.props.item.email}>{this.props.item.email}</a>
		</div>
        )
    }
});

var contacts = [{
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
		<div className = {app}>
			<ContactForm contact={contactForm} />
			<Contacts items={contacts} />
		</div>
        )
    }
});
