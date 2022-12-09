import { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';
export default class Modal extends Component {
  static propTypes = {
    toogleModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    e.code === 'Escape' && this.props.toogleModal();
  };
  handleBackdropClick = e => {
    e.target === e.currentTarget && this.props.toogleModal();
  };
  render() {
    const { handleBackdropClick } = this;
    const { largeImage } = this.props;
    return (
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>
          <img src={largeImage} alt="" />
        </div>
      </div>
    );
  }
}
