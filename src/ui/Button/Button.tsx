import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button: React.FC<
	React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, ...buttonProps }) => {
	return <button className={cn(styles.button, className)} {...buttonProps} />;
};
