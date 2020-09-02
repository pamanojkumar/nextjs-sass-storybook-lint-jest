import PropTypes from 'prop-types';
import style from './Header.module.scss';
import cn from 'classnames'

const Header = (props) => {
  const { title, description, headingLevel } = props;
  const HeadingLevel = `h${headingLevel}`;
  const bg = headingLevel === 1 ? 'bg1' : 'bg2';

  /* return (
    <div className="header_wrapper">
      <HeadingLevel className="h-title">{title}</HeadingLevel>
      <p className="description">{description}</p>
    </div>
  ) */

  return (
    <div className={ cn(style.header_wrapper, style[bg] )}>
      <HeadingLevel className={style['h-title']}>{title}</HeadingLevel>
      <p className={ cn(style.description, style.newtitle )}>{description}</p>
      {/* <img className ={style.img} src=''></img> */}
    </div>
  )
}

Header.propTypes = {
  /**
   * Title text
   */
  title: PropTypes.string,
  /**
   * What description to display
   */
  description: PropTypes.string,
  /**
   * How large should the title be?
   */
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Header.defaultProps = {
  title: 'title to display',
  description: 'description to be here',
  headingLevel: 1
};

export default Header;