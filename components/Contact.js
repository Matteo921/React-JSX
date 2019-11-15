var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
          <img className={'contactImage'} src={'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-outline-256.png'}/>
          <p className={'contactLabel'}>
              Imię: {this.props.contact.firstName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
          </a>
      </div>
    )
  },
});