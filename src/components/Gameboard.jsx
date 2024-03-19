import Rules from '../Rules';
import PropTypes from 'prop-types';

export default function Gameboard({ children }) {
  return (
    <div className="game">
      <h1>▲ Higher / Lower ▼</h1>
      {children}
      <Rules />
    </div>
  );
}

Gameboard.propTypes = {
  children: PropTypes.node.isRequired
};
