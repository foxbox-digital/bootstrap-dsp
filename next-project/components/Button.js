import classnames from 'classnames';

function Button(props) {
  return <button className={classnames(['btn', `btn-${props.variant}`])}>{children}</button>;
}

export default Button;