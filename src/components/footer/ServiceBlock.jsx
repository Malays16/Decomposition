import PropTypes from 'prop-types';

const ServiceBlock = ({title, children}) => {
  return (
    <div className="service-block">
      <h2 className="title"><a href="#">{title}</a></h2>
      <ul className="content">
        {children.props.children.map((child, index) => {
          return <li key={index}>{child}</li>
        })}
      </ul>
    </div>
  );
};

export default ServiceBlock;

ServiceBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};