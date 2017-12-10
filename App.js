var app = React.createElement(App);
ReactDOM.render(app, document.getElementById("app"));

var App = React.createClass({
	render: function() {
		return (
			<div className={app}>
				<ContactForm contact={contactForm} />
				<Contacts items={contacts} />
			</div>
		);
	}
});
