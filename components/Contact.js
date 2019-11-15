var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contactItem'}>
          <img className={'contactImage'} src={'./contact.png'}/>
          <p className={'contactLabel'}>
             Imię: {this.props.item.firstName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
             {this.props.item.email}
          </a>
        </div>
      )
    },
});

